import { Memory } from "@/types";

export const memories: Memory[] = [
  {
    id: "first-date",
    order: 1,
    title: "Our First Date",
    date: "January 2024",
    coordinates: [-118.2437, 34.0522],
    location: "Los Angeles, CA",
    description:
      "The day everything changed. I remember being so nervous, but the moment I saw you smile, I knew this was the beginning of something incredible.",
    thinking:
      "I can't believe she said yes. Don't mess this up. Okay, she's laughing at my joke — maybe I'm not as awkward as I think.",
    photos: [
      { src: "/photos/01-first-date/photo1.jpg", alt: "Our first date" },
      { src: "/photos/01-first-date/photo2.jpg", alt: "First date smiles" },
    ],
    emoji: "💫",
  },
  {
    id: "first-trip",
    order: 2,
    title: "First Road Trip",
    date: "March 2024",
    coordinates: [-116.5453, 33.8303],
    location: "Joshua Tree, CA",
    description:
      "Our first adventure together. Singing along to our playlist with the windows down, stopping at every scenic viewpoint, and falling asleep under the stars.",
    thinking:
      "This is the most fun I've had in years. I never want this drive to end. She even likes my terrible singing.",
    photos: [
      { src: "/photos/02-first-trip/photo1.jpg", alt: "Road trip views" },
      { src: "/photos/02-first-trip/photo2.jpg", alt: "Desert sunset" },
    ],
    emoji: "🚗",
  },
  {
    id: "beach-day",
    order: 3,
    title: "That Perfect Beach Day",
    date: "May 2024",
    coordinates: [-118.4965, 34.0195],
    location: "Santa Monica, CA",
    description:
      "The day we spent from sunrise to sunset at the beach. Building sandcastles, sharing ice cream, watching the sun melt into the ocean.",
    thinking:
      "I could spend every single day like this. She looks so happy with sand in her hair and the sun on her face.",
    photos: [
      { src: "/photos/03-beach-day/photo1.jpg", alt: "Beach sunset" },
      { src: "/photos/03-beach-day/photo2.jpg", alt: "Beach day fun" },
    ],
    emoji: "🏖️",
  },
  {
    id: "cooking-disaster",
    order: 4,
    title: "The Cooking Disaster",
    date: "June 2024",
    coordinates: [-118.3287, 34.1017],
    location: "Our Kitchen",
    description:
      "We tried to make homemade pasta and ended up covered in flour, eating takeout, and laughing until our stomachs hurt. Best meal ever.",
    thinking:
      "The pasta is ruined but I've never been happier. Her laugh is my favorite sound in the entire world.",
    photos: [
      { src: "/photos/04-cooking/photo1.jpg", alt: "Flour everywhere" },
      { src: "/photos/04-cooking/photo2.jpg", alt: "Takeout backup plan" },
    ],
    emoji: "👩‍🍳",
  },
  {
    id: "concert",
    order: 5,
    title: "Our First Concert",
    date: "July 2024",
    coordinates: [-118.2673, 34.0928],
    location: "Hollywood Bowl, LA",
    description:
      "Dancing under the stars to our favorite songs. You grabbed my hand during that slow song and I forgot everyone else existed.",
    thinking:
      "The way the stage lights catch her eyes... I think I'm falling in love. Actually, I know I am.",
    photos: [
      { src: "/photos/05-concert/photo1.jpg", alt: "Concert lights" },
      { src: "/photos/05-concert/photo2.jpg", alt: "Dancing together" },
    ],
    emoji: "🎵",
  },
  {
    id: "said-i-love-you",
    order: 6,
    title: "I Love You",
    date: "August 2024",
    coordinates: [-118.4912, 34.0259],
    location: "Palisades Park, Santa Monica",
    description:
      "Sitting on that bench overlooking the ocean, watching the sunset paint the sky in pinks and oranges. The three words I'd been holding in finally spilled out.",
    thinking:
      "My heart is beating so fast. I need to tell her. I can't hold it in anymore... She said it back. She said it back!",
    photos: [
      { src: "/photos/06-i-love-you/photo1.jpg", alt: "Sunset at the park" },
      { src: "/photos/06-i-love-you/photo2.jpg", alt: "Our special bench" },
    ],
    emoji: "❤️",
  },
  {
    id: "hiking-adventure",
    order: 7,
    title: "Top of the World",
    date: "September 2024",
    coordinates: [-118.0565, 34.2139],
    location: "Mt. Wilson, Angeles National Forest",
    description:
      "That grueling hike where we almost gave up three times but kept pushing each other. The view from the top made every step worth it.",
    thinking:
      "She's tougher than she thinks. Watching her push through — that's the person I want by my side for everything.",
    photos: [
      { src: "/photos/07-hiking/photo1.jpg", alt: "Mountain summit" },
      { src: "/photos/07-hiking/photo2.jpg", alt: "Trail adventure" },
    ],
    emoji: "⛰️",
  },
  {
    id: "halloween",
    order: 8,
    title: "Best Costume Duo",
    date: "October 2024",
    coordinates: [-118.3262, 34.0937],
    location: "West Hollywood, CA",
    description:
      "Our couples costume won the party. But the best part was staying up until 3am watching horror movies and eating all the leftover candy.",
    thinking:
      "We make the best team. Nobody else could've pulled off this costume. She's my favorite person to be weird with.",
    photos: [
      { src: "/photos/08-halloween/photo1.jpg", alt: "Costume reveal" },
      { src: "/photos/08-halloween/photo2.jpg", alt: "Halloween night" },
    ],
    emoji: "🎃",
  },
  {
    id: "thanksgiving",
    order: 9,
    title: "Meeting the Family",
    date: "November 2024",
    coordinates: [-117.1611, 32.7157],
    location: "San Diego, CA",
    description:
      "The day you met my family. You were so nervous but within five minutes my mom was showing you baby photos and my dad was already planning our next visit.",
    thinking:
      "My family loves her. Of course they do — how could anyone not? This feels so right, like she was always meant to be here.",
    photos: [
      { src: "/photos/09-thanksgiving/photo1.jpg", alt: "Family gathering" },
      { src: "/photos/09-thanksgiving/photo2.jpg", alt: "Thanksgiving dinner" },
    ],
    emoji: "🦃",
  },
  {
    id: "new-years",
    order: 10,
    title: "Midnight Kiss",
    date: "December 2024",
    coordinates: [-118.2468, 34.0407],
    location: "Downtown LA",
    description:
      "As the countdown hit zero and fireworks lit up the sky, there was nobody else in the world I wanted to kiss at midnight. Here's to every new year with you.",
    thinking:
      "A whole new year to love her. Last year changed my life because of her. This next one is going to be even better.",
    photos: [
      { src: "/photos/10-new-years/photo1.jpg", alt: "New Year's fireworks" },
      { src: "/photos/10-new-years/photo2.jpg", alt: "Midnight celebration" },
    ],
    emoji: "🎆",
  },
  {
    id: "anniversary",
    order: 11,
    title: "One Year of Us",
    date: "January 2025",
    coordinates: [-118.2437, 34.0522],
    location: "Where It All Began",
    description:
      "Back to where we had our first date, one year later. Same place, same butterflies, but now with a year of incredible memories between us.",
    thinking:
      "365 days and I love her more than day one. I didn't think that was possible. Every day she finds a new way to amaze me.",
    photos: [
      { src: "/photos/11-anniversary/photo1.jpg", alt: "Anniversary dinner" },
      { src: "/photos/11-anniversary/photo2.jpg", alt: "One year together" },
    ],
    emoji: "🥂",
  },
  {
    id: "valentines-2026",
    order: 12,
    title: "Happy Valentine's Day, My Love",
    date: "February 2026",
    coordinates: [-118.3, 34.05],
    location: "Right Here, Right Now",
    description:
      "Every pin on this map is a piece of our story — and it's only the beginning. You are my favorite adventure, my best friend, my home. I love you more than any map could show.",
    thinking:
      "I made this for you because you deserve to see our love story the way I see it — as the most beautiful journey I've ever been on. Happy Valentine's Day, baby. Here's to filling a thousand more maps together.",
    photos: [
      { src: "/photos/12-valentines/photo1.jpg", alt: "Us, today" },
    ],
    emoji: "💝",
    isSpecial: true,
  },
];
