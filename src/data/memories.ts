import { Memory } from "@/types";

export const memories: Memory[] = [
  {
    id: "where-we-met",
    order: 1,
    title: "Where It All Started",
    date: "2020",
    coordinates: [-94.2088, 36.3729],
    location: "Bentonville, Arkansas",
    description:
      "We were just two sophomores in high school without a care in the world. Our little town is where I found you, and nothing has been the same since. Bentonville gave me the best thing in my life.",
    photos: [
      { src: "/photos/01-where-we-met/photo1.jpg", alt: "Where we met" },
      { src: "/photos/01-where-we-met/photo2.jpg", alt: "High school days" },
    ],
    emoji: "💫",
  },
  {
    id: "fbla-state",
    order: 2,
    title: "FBLA State Competition",
    date: "April 2022",
    coordinates: [-92.2896, 34.7465],
    location: "Little Rock, Arkansas",
    description:
      "We turned a lame competition into our own little adventure. Having you there made everything better. You got so homesick and you leaned on me for support.",
    photos: [
      { src: "/photos/02-fbla/photo1.jpg", alt: "FBLA competition" },
      { src: "/photos/02-fbla/photo2.jpg", alt: "Little Rock trip" },
    ],
    emoji: "🏆",
  },
  {
    id: "mount-magazine",
    order: 3,
    title: "Our First Solo Trip",
    date: "July 2022",
    coordinates: [-93.6446, 35.1670],
    location: "The Lodge at Mount Magazine, Arkansas",
    description:
      "Our senior trip before we were pulled in different directions. Just the two of us at the highest point in Arkansas. This was the first time we were truly alone together.",
    photos: [
      { src: "/photos/03-mount-magazine/photo1.jpg", alt: "Mount Magazine views" },
      { src: "/photos/03-mount-magazine/photo2.jpg", alt: "The Lodge" },
    ],
    emoji: "⛰️",
  },
  {
    id: "first-college-visit",
    order: 4,
    title: "Jordan takes on her city",
    date: "September 2022",
    coordinates: [-95.4014, 29.7174],
    location: "Rice University, Houston",
    description:
      "The first time Jordan drove down to see me at Rice. Long distance was really hard, but the moment I saw her car pull up, it made me .",
    photos: [
      { src: "/photos/04-rice-visit/photo1.jpg", alt: "First visit at Rice" },
      { src: "/photos/04-rice-visit/photo2.jpg", alt: "Houston together" },
    ],
    emoji: "🦉",
  },
  {
    id: "ut-basketball",
    order: 5,
    title: "Watching Her Team",
    date: "February 2023",
    coordinates: [-97.7431, 30.2672],
    location: "Austin, Texas",
    description:
      "Jordan came to visit and we road-tripped to Austin to watch UT women's basketball — her favorite team. It made me so happy to see her so happy.",
    photos: [
      { src: "/photos/05-austin/photo1.jpg", alt: "UT basketball game" },
      { src: "/photos/05-austin/photo2.jpg", alt: "Austin trip" },
    ],
    emoji: "🏀",
  },
  {
    id: "galveston-anniversary",
    order: 6,
    title: "Three Years of Us",
    date: "April 2023",
    coordinates: [-94.7977, 29.3013],
    location: "Galveston, Texas",
    description:
      "Three years together and still finding new ways to fall in love. After a weekend of Astros, Rooftop Cinema, love lock bridge, and Museums, we finished it off with a walk on the Galveston beach. It seems like the only memorable things in my life happen when I'm with you.",
    photos: [
      { src: "/photos/06-galveston/photo1.jpg", alt: "Galveston beach" },
      { src: "/photos/06-galveston/photo2.jpg", alt: "Anniversary celebration" },
    ],
    emoji: "🌊",
  },
  {
    id: "sedona-spring-break",
    order: 7,
    title: "Spring Break Out West",
    date: "March 2024",
    coordinates: [-111.7610, 34.8697],
    location: "Flagstaff & Sedona, Arizona",
    description:
      "Spring break skiing in Flagstaff, and seeing the red rocks in Sedona. But my favorite part was always the quiet moments with her, warming up together after a day on the slopes.",
    photos: [
      { src: "/photos/07-sedona/photo1.jpg", alt: "Sedona red rocks" },
      { src: "/photos/07-sedona/photo2.jpg", alt: "Skiing in Flagstaff" },
    ],
    emoji: "🎿",
  },
  {
    id: "palo-alto-birthday",
    order: 8,
    title: "Birthday in Palo Alto",
    date: "July 2024",
    coordinates: [-122.1430, 37.4419],
    location: "Palo Alto, California",
    description:
      "Jordan flew out to California for my birthday while I was interning. Having her there turned for my birthday was the only thing I needed: I was really really excited to show her everything I had experienced that summer. Without her my birthday feels so lonely",
    photos: [
      { src: "/photos/08-palo-alto/photo1.jpg", alt: "Birthday in Palo Alto" },
      { src: "/photos/08-palo-alto/photo2.jpg", alt: "Meta campus" },
    ],
    emoji: "🎂",
  },
  {
    id: "san-francisco",
    order: 9,
    title: "SF Day Trip",
    date: "July 2024",
    coordinates: [-122.4194, 37.7749],
    location: "San Francisco, California",
    description:
      "We drove up to the city and explored San Francisco together: the Golden Gate, Palace of Fine Arts, and the great food. Every new city is better with her. We could be anywhere and it would feel like an adventure.",
    photos: [
      { src: "/photos/09-san-francisco/photo1.jpg", alt: "Golden Gate Bridge" },
      { src: "/photos/09-san-francisco/photo2.jpg", alt: "San Francisco views" },
    ],
    emoji: "🌉",
  },
  {
    id: "jordan-moves-houston",
    order: 10,
    title: "She Chose Me",
    date: "August 2024",
    coordinates: [-95.3422, 29.7199],
    location: "University of Houston",
    description:
      "Jordan transferred to the University of Houston to be close to me. After years of long distance, she packed up everything and moved to Houston. I know how scared she was, but she did it for me. Thats how I know she loves me",
    photos: [
      { src: "/photos/10-houston-move/photo1.jpg", alt: "Moving to Houston" },
      { src: "/photos/10-houston-move/photo2.jpg", alt: "Together in Houston" },
    ],
    emoji: "🏠",
  },
  {
    id: "south-padre",
    order: 11,
    title: "Spring Break on the Island",
    date: "March 2025",
    coordinates: [-97.1681, 26.1118],
    location: "South Padre Island, Texas",
    description:
      "Sun, sand, and missy. South Padre for spring break was exactly what we needed. Some time alone without any stress or responsibilities. I wish we could do it every weekend",
    photos: [
      { src: "/photos/11-south-padre/photo1.jpg", alt: "South Padre beach" },
      { src: "/photos/11-south-padre/photo2.jpg", alt: "Island sunset" },
    ],
    emoji: "🏖️",
  },
  {
    id: "nyc-birthday",
    order: 12,
    title: "Birthday in the Big Apple",
    date: "July 2025",
    coordinates: [-74.0060, 40.7128],
    location: "New York City",
    description:
      "The second time Jordan flew across the country to be with me for my birthday while I was interning, this time in New York. The city that never sleeps had nothing on us. Jordan and I tore up the city!",
    photos: [
      { src: "/photos/12-nyc/photo1.jpg", alt: "NYC together" },
      { src: "/photos/12-nyc/photo2.jpg", alt: "Birthday in New York" },
    ],
    emoji: "🗽",
  },
  {
    id: "valentines-2026",
    order: 13,
    title: "Happy Valentine's Day, Jordan",
    date: "February 2026",
    coordinates: [-95.3698, 29.7604],
    location: "Houston — Our Home",
    description:
      "Every pin on this map is a piece of our story, from Bentonville to New York City and everywhere in between. You've driven across states, flown across the country, and moved your whole life just to be with me. You are my favorite adventure, my best friend, my home. I love you more than any map could ever show.",
    photos: [
      { src: "/photos/13-valentines/photo1.jpg", alt: "Us, today" },
    ],
    emoji: "💝",
    isSpecial: true,
  },
];
