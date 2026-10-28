/**
 * Audio Service for Romantic Wedding Experience
 * Uses Web Audio API for high-fidelity interactive sound effects and romantic generative ambient music.
 * Zero external audio file dependencies — guaranteed 100% offline reliability.
 */

class WeddingAudioService {
  constructor() {
    this.ctx = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
    this.musicStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = 0.5;
        this.sfxGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = 0.25;
        this.musicGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
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

  // Romantic ambient acoustic piano & harp progression (C - G/B - Am7 - Fmaj7)
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
      if (!this.ctx) return;
      if (this.isPlayingMusic) return;

      this.isPlayingMusic = true;
      this.musicStep = 0;

      // Chord progressions for romantic mood
      const chords = [
        // Cmaj9
        [261.63, 329.63, 392.0, 493.88, 587.33],
        // G/B (B3, D4, G4, D5)
        [246.94, 293.66, 392.0, 587.33],
        // Am9 (A3, C4, E4, G4, B4)
        [220.0, 261.63, 329.63, 392.0, 493.88],
        // Fmaj7#11 (F3, A3, C4, E4, B4)
        [174.61, 220.0, 261.63, 329.63, 493.88],
      ];

      const playChordArpeggio = () => {
        if (!this.isPlayingMusic || !this.ctx) return;

        const chordIndex = Math.floor(this.musicStep / 4) % chords.length;
        const currentChord = chords[chordIndex];
        const noteIndex = this.musicStep % currentChord.length;
        const freq = currentChord[noteIndex];

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Warm harp/piano acoustic timbre
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(freq, now);

        // Soft gentle envelope
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0005, now + 1.8);

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.musicGain);

        osc.start(now);
        osc2.start(now);
        osc.stop(now + 1.9);
        osc2.stop(now + 1.9);

        this.musicStep++;
        this.musicTimer = setTimeout(playChordArpeggio, 580);
      };

      playChordArpeggio();
    } catch (err) {
      console.warn("Ambient music error:", err);
    }
  }

  stopAmbientMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  setVolume(val) {
    if (this.musicGain) {
      this.musicGain.gain.value = Math.max(0, Math.min(1, val));
    }
  }
}

export const audioService = new WeddingAudioService();
