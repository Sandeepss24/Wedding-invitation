/**
 * Central Configuration for the Muslim Wedding Invitation Website
 * Couple: Mohammed Nishad & Jumeena
 * Marriage Dates: November 20 – 22, 2026
 * Venue: Nettoor Mahallu Auditorium, Nettoor, Maradu, Ernakulam
 */

export const weddingData = {
  bismillah: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    transliteration: "Bismillahir Rahmanir Raheem",
    english: "In the Name of Allah, the Most Gracious, the Most Merciful",
  },

  couple: {
    groom: {
      name: "Mohammed Nishad",
      shortName: "Nishad",
      fullName: "Mohammed Nishad",
      parents: "Mr. Muhammed Nizar C M & Mrs. Shaffeera K M",
      house: "Thekkeveettil Parambil House",
      post: "Nettoor P O, Maradu, Ernakulam",
      initial: "N",
    },
    bride: {
      name: "Jumeena",
      shortName: "Jumeena",
      fullName: "Jumeena",
      parents: "Mr. Nassar A S & Mrs. Noorjahan P K",
      house: "Arikkanezhath House",
      post: "Madavana, Panangad P O, Ernakulam",
      initial: "J",
    },
    namesCombined: "Mohammed Nishad & Jumeena",
    namesShort: "Nishad & Jumeena",
    monogram: "N & J",
    hashtag: "#NishadWedsJumeena",
    announcementHeading: "THE SACRED NIKKAH & WEDDING",
    subtitle: "Two souls united by faith, boundless love, and the endless blessings of Allah.",
    quote: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
    quoteAuthor: "Surah Ar-Rum (30:21)",
    duaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation: "May Allah bless you, bestow His blessings upon you, and unite you both in goodness and harmony.",
    sharingHappiness: "Zain & Dua",
    contactPhone: "9074838137",
    contactPhoneFormatted: "+91 90748 38137",
  },

  schedule: {
    // Configurable countdown target date: Nov 20, 2026
    countdownTarget: "2026-11-22T11:00:00",
    weddingDateDisplay: "November 22 – 22, 2026",
    mainMarriageDate: "Sunday, November 22, 2026",
    nikkahDate: "Sunday, November 22, 2026",
    nikkahTime: "11:00 AM",
    hijriDate: "12 Jumadil Akhir 1448",
    locationDisplay: "Nettoor Mahallu Auditorium, Maradu, Ernakulam",
  },

  venue: {
    name: "Nettoor Mahallu Auditorium",
    city: "Nettoor, Maradu, Ernakulam, Kerala",
    address: "Nettoor-Madavana Road, Nettoor P O, Maradu, Ernakulam, Kerala 682040",
    googleMapsUrl: "https://maps.google.com/?q=Nettoor+Mahallu+Auditorium+Maradu+Ernakulam",
    googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mohammed+Nishad+%26+Jumeena%27s+Nikah+%26+Wedding&dates=20261120T053000Z/20261122T123000Z&details=Celebrating+the+auspicious+Wedding+and+Sacred+Nikkah+of+Mohammed+Nishad+and+Jumeena+at+Nettoor+Mahallu+Auditorium.&location=Nettoor+Mahallu+Auditorium,+Nettoor,+Maradu,+Ernakulam",
  },

  storyMilestones: [
    {
      year: "2022",
      title: "Written in the Stars (Qadr)",
      date: "September 14, 2022",
      location: "Kochi, Kerala",
      description:
        "What began as a quiet family introduction blossomed into effortless laughter, shared values, and deep mutual respect. Over aromatic coffee and jasmine blooms, two hearts quietly recognized their destiny.",
      image: "/images/wedding-2.jpg",
      tag: "Serendipity & Faith",
      objectPosition: "center 12%",
    },
    {
      year: "2024",
      title: "The Golden Promise",
      date: "May 20, 2024",
      location: "Ernakulam, Kerala",
      description:
        "Under a canopy of glowing lights and twilight skies, with both families offering heartfelt Duas and tears of joy, Nishad asked Jumeena to walk this life beside him. Alhamdulillah, the answer was yes.",
      image: "/images/wedding-3.jpg",
      tag: "The Engagement",
      objectPosition: "center 15%",
    },
    {
      year: "2026",
      title: "The Auspicious Wedding & Nikkah",
      date: "November 20 – 22, 2026",
      location: "Nettoor Mahallu Auditorium",
      description:
        "Sealing our lifelong covenant before Allah (SWT) and our cherished family and friends, stepping hand in hand into a future filled with peace, devotion, and shared dreams.",
      image: "/images/wedding-1.jpg",
      tag: "Forever Begins",
      objectPosition: "center 10%",
    },
  ],

  events: [
    {
      id: "wedding-day",
      name: "The Auspicious Marriage Ceremony",
      arabicName: "حفل الزفاف المبارك",
      date: "Sunday, November 22, 2026",
      time: "10:30 AM Onwards",
      venueName: "Nettoor Mahallu Auditorium",
      address: "Nettoor-Madavana Road, Nettoor, Maradu, Ernakulam",
      dressCode: "Traditional Islamic Elegance / Festive Ethnic",
      description:
        "Commencing our auspicious wedding celebrations with heartfelt prayers, family gatherings, warm blessings, and delicious traditional culinary feast.",
      image: "/images/wedding-1.jpg",
      mapsUrl: "https://maps.google.com/?q=Nettoor+Mahallu+Auditorium+Maradu+Ernakulam",
      badge: "Marriage Day",
      objectPosition: "center 10%",
    },
    {
      id: "mehendi",
      name: "Mehendi & Haldi Eve",
      arabicName: "حفل الحناء والبهجة",
      date: "Saturday, November 21, 2026",
      time: "05:00 PM Onwards",
      venueName: "Nettoor Mahallu Auditorium",
      address: "Nettoor-Madavana Road, Nettoor, Maradu, Ernakulam",
      dressCode: "Festive Emerald, Mustard & Traditional Silk",
      description:
        "An enchanting evening filled with fragrant henna artistry, soulful melodies, sweet delicacies, and warm celebration under festive lantern lights.",
      image: "/images/wedding-3.jpg",
      mapsUrl: "https://maps.google.com/?q=Nettoor+Mahallu+Auditorium+Maradu+Ernakulam",
      badge: "Henna & Haldi Eve",
      objectPosition: "center 15%",
    },
    {
      id: "nikkah",
      name: "The Sacred Nikkah Ceremony",
      arabicName: "عقد النكاح المبارك",
      date: "Sunday, November 22, 2026",
      time: "11:00 AM (12 Jumadil Akhir 1448)",
      venueName: "Nettoor Mahallu Auditorium",
      address: "Nettoor-Madavana Road, Nettoor, Maradu, Ernakulam",
      dressCode: "Regal Traditional Ivory, Champagne & Gold",
      description:
        "Witness the sacred marriage contract (Nikkah), inspiring Khutbah, and collective Duas as we seek Allah's eternal blessings, followed by the grand wedding feast.",
      image: "/images/wedding-2.jpg",
      mapsUrl: "https://maps.google.com/?q=Nettoor+Mahallu+Auditorium+Maradu+Ernakulam",
      badge: "The Sacred Nikkah",
      objectPosition: "center 12%",
    },
  ],

  gallery: [
    {
      id: 1,
      title: "Walking Hand In Hand",
      caption: "Mohammed Nishad & Jumeena walking together in royal traditional attire, sharing quiet smiles.",
      image: "/images/wedding-2.jpg",
      category: "Portraits",
      aspect: "portrait",
      objectPosition: "center 12%",
    },
    {
      id: 2,
      title: "Playful Joy & Style",
      caption: "A fun and radiant moment of Nishad & Jumeena celebrating their wedding excitement.",
      image: "/images/wedding-1.jpg",
      category: "Moments",
      aspect: "portrait",
      objectPosition: "center 10%",
    },
    {
      id: 3,
      title: "Twirling Into Forever",
      caption: "Dancing and twirling under the lush greenery, surrounded by happiness and love.",
      image: "/images/wedding-3.jpg",
      category: "Celebration",
      aspect: "portrait",
      objectPosition: "center 15%",
    },
    {
      id: 4,
      title: "The Auspicious Invitation Card",
      caption: "The official wedding invitation card blessed in the name of Allah.",
      image: "/images/invitation-card.jpg",
      category: "Keepsake",
      aspect: "portrait",
      objectPosition: "center top",
    },
    {
      id: 5,
      title: "Fragrant Henna & Traditions",
      caption: "Intricate bridal henna artwork adorned with fresh jasmine and gold jewelry.",
      image: "/images/gallery-haldi.jpg",
      category: "Traditions",
      aspect: "portrait",
    },
    {
      id: 6,
      title: "Sacred Covenant & Rings",
      caption: "Wedding rings beside antique brass box and Holy verse calligraphy.",
      image: "/images/gallery-rings.jpg",
      category: "Details",
      aspect: "square",
    },
  ],

  invitationCard: {
    cardImage: "/images/invitation-card.jpg",
    bismillahArabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    bismillahEnglish: "In The Name Of Allah",
    inshaAllah: "Insha Allah",
    parentsBride: "Mr. Nassar A S & Mrs. Noorjahan P K",
    parentsBrideHouse: "Arikkanezhath House, Madavana, Panangad P O, Ernakulam",
    invitationPlea:
      "We cordially invite your esteemed presence with family on the auspicious occasion of the marriage of our beloved daughter",
    brideName: "Jumeena",
    groomName: "Mohammed Nishad",
    parentsGroom: "Mr. Muhammed Nizar C M & Mrs. Shaffeera K M",
    parentsGroomHouse: "Thekkeveettil Parambil House, Nettoor P O, Maradu, Ernakulam",
    nikkahTime: "Nikkah: 11:00 AM",
    ceremonyDate: "SUNDAY 22 | NOVEMBER | 2026",
    hijriDate: "(12 Jumadil Akhir 1448)",
    marriageDateNote: "Marriage Celebrations commence Sunday, November 22, 2026",
    venueName: "Nettoor Mahallu Auditorium",
    venueAddress: "Nettoor-Madavana Road, Nettoor, Maradu, Ernakulam",
    sharingHappiness: "Zain & Dua",
    contactPhone: "9074838137",
    contactPhoneFormatted: "+91 90748 38137",
    locationMapsUrl: "https://maps.google.com/?q=Nettoor+Mahallu+Auditorium+Maradu+Ernakulam",
  },

  music: {
    title: "Mawlaya & Kun Anta — Romantic Acoustic Oud, Strings & Piano",
    artist: "Nishad & Jumeena's Wedding Theme",
  },
};

