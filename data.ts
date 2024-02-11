const date = new Date();

const data = {
  statuses: [{ name: 'pending' }, { name: 'approved' }, { name: 'rejected' }],
  activities: [
    {
      name: 'Science Discovery Workshop',
      date: date.setDate(date.getDate() + 14),
      location: 'TechLab Center',
      purpose:
        'Engage in hands-on experiments and discover the wonders of science. A workshop designed for young curious minds.',
      startTime: '10:00 AM',
      endTime: '2:00 PM',
      slug: '123-science-discovery-workshop',
    },
    {
      name: 'Sports Day Extravaganza',
      date: date.setDate(date.getDate() + 15),
      location: 'Sports Arena',
      purpose:
        'Join us for an action-packed day filled with fun sports activities. Develop teamwork and sportsmanship skills.',
      startTime: '02:00 PM',
      endTime: '6:00 PM',
      slug: '124-sports-day-extravaganza',
    },
    {
      name: 'Coding Camp for Kids',
      date: date.setDate(date.getDate() + 16),
      location: 'CodeSpace Academy',
      purpose:
        'Introduce your child to the exciting world of coding. Hands-on activities and interactive coding sessions for young tech enthusiasts.',
      startTime: '09:00 AM',
      endTime: '4:00 PM',
      slug: '125-coding-camp-for-kids',
    },
    {
      name: 'Art and Music Festival',
      date: date.setDate(date.getDate() + 17),
      time: '03:00 PM - 8:00 PM',
      location: 'Creative Plaza',
      purpose:
        'Celebrate creativity with a blend of art and music performances. An artistic extravaganza for young talents.',
      startTime: '03:00 PM',
      endTime: '8:00 PM',
      slug: '126-art-and-music-festival',
    },
    {
      name: 'Outdoor Movie Night',
      date: date.setDate(date.getDate() + 18),
      location: 'Community Park',
      purpose:
        'Enjoy a cozy night under the stars with a family-friendly outdoor movie screening. Bring your blankets and snacks!',
      startTime: '07:30 PM',
      endTime: '10:00 PM',
      slug: '127-outdoor-movie-night',
    },
    {
      name: 'DIY Crafts Carnival',
      date: date.setDate(date.getDate() + 19),
      location: 'Crafty Corner',
      purpose:
        'Unleash your creativity with a day of do-it-yourself crafts. Create personalized crafts and artworks in a festive atmosphere.',
      startTime: '11:00 AM',
      endTime: '3:00 PM',
      slug: '128-diy-crafts-carnival',
    },
    {
      name: 'Gardening and Planting Day',
      date: date.setDate(date.getDate() + 20),
      location: 'Green Thumb Gardens',
      purpose:
        'Learn about gardening and plant your own seeds. A hands-on experience to foster a love for nature and gardening.',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      slug: '129-gardening-and-planting-day',
    },
    {
      name: 'Nature Explorer Camp',
      date: date.setDate(date.getDate() + 21),
      location: 'Green Valley Park',
      purpose:
        'Immerse your child in the wonders of nature with guided outdoor activities, scavenger hunts, and educational sessions.',
      startTime: '09:00 AM',
      endTime: '3:00 PM',
      slug: '130-nature-explorer-camp',
    },
    {
      name: 'Creative Arts Workshop',
      date: date.setDate(date.getDate() + 22),
      location: 'Art Haven Studio',
      purpose:
        "Unleash your child's creativity through painting, crafts, and artistic expression. A hands-on workshop for budding young artists.",
      startTime: '01:00 PM',
      endTime: '5:00 PM',
      slug: '131-creative-arts-workshop',
    },
    {
      name: 'Weekly Storytime',
      date: date.setDate(date.getDate() + 23),
      location: 'Community Library',
      purpose:
        'Join us for captivating story sessions, fostering a love for reading and imagination.',
      startTime: '04:00 PM',
      endTime: '5:00 PM',
      slug: '132-weekly-storytime',
    },
  ],

  campActivities: [
    {
      day: 'Monday',
      activity: 'Outdoor Exploration',
      startTime: '9:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Tuesday',
      activity: 'Creative Arts Workshop',
      startTime: '1:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Wednesday',
      activity: 'Sports and Games',
      startTime: '10:00 AM',
      endTime: '1:00 PM',
    },
    {
      day: 'Thursday',
      activity: 'Campfire Stories',
      startTime: '7:00 PM',
      endTime: '9:00 PM',
    },
    {
      day: 'Friday',
      activity: 'Swimming and Water Fun',
      startTime: '2:00 PM',
      endTime: '5:00 PM',
    },
    {
      day: 'Saturday',
      activity: 'Friendship Building Activities',
      startTime: '11:00 AM',
      endTime: '3:00 PM',
    },
    {
      day: 'Monday',
      activity: 'Nature Walk',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
    },
    {
      day: 'Monday',
      activity: 'Scavenger Hunt',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
    },
    {
      day: 'Tuesday',
      activity: 'Painting Class',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Tuesday',
      activity: 'Crafts Workshop',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Wednesday',
      activity: 'Soccer Practice',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
    },
    {
      day: 'Wednesday',
      activity: 'Board Games',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
    },
    {
      day: 'Thursday',
      activity: 'Campfire Sing-Along',
      startTime: '7:00 PM',
      endTime: '9:00 PM',
    },
    {
      day: 'Thursday',
      activity: 'Storytelling Session',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Friday',
      activity: 'Pool Games',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Friday',
      activity: 'Water Balloon Fight',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Saturday',
      activity: 'Team Building Activities',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
    },
    {
      day: 'Saturday',
      activity: 'Arts and Crafts',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Monday',
      activity: 'Nature Walk',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
    },
    {
      day: 'Monday',
      activity: 'Scavenger Hunt',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
    },
    {
      day: 'Tuesday',
      activity: 'Painting Class',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Tuesday',
      activity: 'Crafts Workshop',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Wednesday',
      activity: 'Soccer Practice',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
    },
    {
      day: 'Wednesday',
      activity: 'Board Games',
      startTime: '1:00 PM',
      endTime: '3:00 PM',
    },
    {
      day: 'Thursday',
      activity: 'Campfire Sing-Along',
      startTime: '7:00 PM',
      endTime: '9:00 PM',
    },
    {
      day: 'Thursday',
      activity: 'Storytelling Session',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Friday',
      activity: 'Pool Games',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Friday',
      activity: 'Water Balloon Fight',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      day: 'Saturday',
      activity: 'Team Building Activities',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
    },
    {
      day: 'Saturday',
      activity: 'Arts and Crafts',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
    },
    {
      day: 'Sunday',
      activity: 'Nature Scavenger Hunt',
      startTime: '9:00 AM',
      endTime: '11:00 AM',
    },
    {
      day: 'Sunday',
      activity: 'Outdoor Movie Night',
      startTime: '7:00 PM',
      endTime: '9:00 PM',
    },
  ],
};

module.exports = data;

// const summerCampPageData = {
//   title: 'Summer Adventure Camp',
//   subtitle: 'An Unforgettable Summer Experience for Kids',
//   introduction:
//     'Welcome to our Summer Adventure Camp, where kids embark on a journey of fun, learning, and friendship. Our camp is designed to create lasting memories through a variety of exciting activities and adventures.',
//   highlights: [
//     'Outdoor Exploration: Discover the wonders of nature with guided hikes, scavenger hunts, and camping adventures.',
//     'Creative Arts: Unleash creativity through arts and crafts, painting, and interactive workshops.',
//     'Sports and Games: Develop teamwork and coordination through sports, games, and friendly competitions.',
//     'Campfire Stories: Enjoy evenings filled with cozy campfires and captivating storytelling sessions.',
//     'Swimming and Water Activities: Beat the summer heat with refreshing water activities and swimming sessions.',
//     'Friendship Building: Foster new friendships and create a sense of community in a supportive and inclusive environment.',
//   ],
//   schedule: [
//     {
//       day: 'Monday',
//       activity: 'Outdoor Exploration',
//       time: '9:00 AM - 12:00 PM',
//     },
//     {
//       day: 'Tuesday',
//       activity: 'Creative Arts Workshop',
//       time: '1:00 PM - 4:00 PM',
//     },
//     {
//       day: 'Wednesday',
//       activity: 'Sports and Games',
//       time: '10:00 AM - 1:00 PM',
//     },
//     {
//       day: 'Thursday',
//       activity: 'Campfire Stories',
//       time: '7:00 PM - 9:00 PM',
//     },
//     {
//       day: 'Friday',
//       activity: 'Swimming and Water Fun',
//       time: '2:00 PM - 5:00 PM',
//     },
//     {
//       day: 'Saturday',
//       activity: 'Friendship Building Activities',
//       time: '11:00 AM - 3:00 PM',
//     },
//   ],
//   registrationLink: '#', // Replace with the actual registration link
//   contactInfo: {
//     email: 'summercamp@example.com',
//     phone: '+1 (555) 123-4567',
//   },
// };
