/**
 * Audio Service for Romantic Wedding Experience
 * Plays "Meeladun Saeed" by Firdhous Kaliyaroad with interactive Web Audio sound effects.
 */

class WeddingAudioService {
  constructor() {
    this.ctx = null;
    this.sfxGain = null;
    this.isPlayingMusic = false;
    this.bgAudio = null;
    this.fadeInterval = null;
    this.targetVolume = 0.65;
  }

  init() {
    // 1. Web Audio Context for interactive sound effects (unwrapping, sparkles)
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = 0.5;
        this.sfxGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    // 2. HTML5 Audio Element for "Meeladun Saeed"
    if (!this.bgAudio && typeof window !== "undefined") {
      try {
        this.bgAudio = new Audio();
        const canPlayMp3 = this.bgAudio.canPlayType("audio/mpeg");
        this.bgAudio.src = canPlayMp3 ? "/audio/meeladun-saeed.mp3" : "/audio/meeladun-saeed.m4a";
        this.bgAudio.loop = true;
        this.bgAudio.preload = "auto";
        this.bgAudio.volume = 0;
      } catch (e) {
        console.warn("Could not create HTML5 audio element:", e);
      }
    }
  }

  // Play a sparkling magic unwrap chime & ribbon whoosh
  playUnwrapSound() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // 1. Ribbon rustle / whoosh using bandpass filtered pink noise
      const bufferSize = this.ctx.sampleRate * 0.4;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.35);
      filter.Q.value = 3.0;

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.3, now + 0.1);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.sfxGain);
      noise.start(now);

      // 2. Magic Chime Flourish (Sparkling Celesta / Glockenspiel arpeggio)
      const chimeFreqs = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51, 1567.98, 2093.0]; // C5 to C7
      chimeFreqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const startTime = now + 0.15 + idx * 0.08;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        // Subtle bell harmonic
        const osc2 = this.ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(freq * 2.01, startTime);

        noteGain.gain.setValueAtTime(0, startTime);
        noteGain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.9);

        osc.connect(noteGain);
        osc2.connect(noteGain);
        noteGain.connect(this.sfxGain);

        osc.start(startTime);
        osc2.start(startTime);
        osc.stop(startTime + 0.95);
        osc2.stop(startTime + 0.95);
      });

      // 3. Warm celestial golden pad chord
      const chord = [261.63, 329.63, 392.0, 493.88]; // C, E, G, B
      chord.forEach((freq) => {
        const padOsc = this.ctx.createOscillator();
        const padGain = this.ctx.createGain();
        const padStart = now + 0.4;

        padOsc.type = "sine";
        padOsc.frequency.setValueAtTime(freq, padStart);

        padGain.gain.setValueAtTime(0, padStart);
        padGain.gain.linearRampToValueAtTime(0.12, padStart + 0.8);
        padGain.gain.exponentialRampToValueAtTime(0.001, padStart + 2.8);

        padOsc.connect(padGain);
        padGain.connect(this.sfxGain);

        padOsc.start(padStart);
        padOsc.stop(padStart + 2.9);
      });
    } catch (err) {
      console.warn("Audio play error:", err);
    }
  }

  // Soft sparkle click sound for buttons & interactions
  playSparkle() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [1046.5, 1318.51, 1567.98];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + i * 0.04;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.08, start + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch (err) {
      console.warn("Sparkle SFX error:", err);
    }
  }

  // Soft click helper
  playSoftClick() {
    this.playSparkle();
  }

  // Background Nasheed: "Meeladun Saeed"
  toggleAmbientMusic(enable) {
    if (enable) {
      this.startAmbientMusic();
    } else {
      this.stopAmbientMusic();
    }
    return this.isPlayingMusic;
  }

  startAmbientMusic() {
    try {
      this.init();
      this.isPlayingMusic = true;

      if (this.bgAudio) {
        if (this.fadeInterval) {
          clearInterval(this.fadeInterval);
        }

        const playPromise = this.bgAudio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Smooth volume ramp-up to target volume
              let currentVol = this.bgAudio.volume;
              this.fadeInterval = setInterval(() => {
                if (currentVol < this.targetVolume) {
                  currentVol = Math.min(this.targetVolume, currentVol + 0.05);
                  if (this.bgAudio) this.bgAudio.volume = currentVol;
                } else {
                  clearInterval(this.fadeInterval);
                  this.fadeInterval = null;
                }
              }, 50);
            })
            .catch((err) => {
              console.warn("Background audio play error or user gesture required:", err);
            });
        }
      }
    } catch (err) {
      console.warn("Ambient music error:", err);
    }
  }

  stopAmbientMusic() {
    this.isPlayingMusic = false;
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    if (this.bgAudio) {
      let currentVol = this.bgAudio.volume;
      this.fadeInterval = setInterval(() => {
        if (currentVol > 0.05) {
          currentVol = Math.max(0, currentVol - 0.08);
          if (this.bgAudio) this.bgAudio.volume = currentVol;
        } else {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
          if (this.bgAudio) {
            this.bgAudio.pause();
            this.bgAudio.volume = 0;
          }
        }
      }, 40);
    }
  }

  setVolume(val) {
    const clamped = Math.max(0, Math.min(1, val));
    this.targetVolume = clamped;
    if (this.bgAudio && this.isPlayingMusic) {
      this.bgAudio.volume = clamped;
    }
  }
}

export const audioService = new WeddingAudioService();
