// /data/postsData.ts
export const posts = [
  {
    id: "1",
    caption: "Check out this amazing product!",
    bio: "I love my job, It brings out the best in me and i'm sure i can bring out the best in your business to. 1 Corthinains 10:31❤️ ",
    img: "/sample1.jpg",
    createdAt: "2024-07-05T08:30:00Z",
    likes: 23,
    comments: 5,
    price: "10,000",
    user: {
      name: "Glow_Skincare",
      avatar: "/avatar1.jpg",
      igHandle: "@glowskin",
      followers: 1200,
      following: 350,
    }
  },
  {
    id: "2",
    caption: "Fresh thrift drop 🔥",
    bio: "I love my job, It brings out the best in me and i'm sure i can bring out the best in your business to. 1 Corthinains 10:31❤️ ",
    img: "/sample2.jpg",
    createdAt: "2024-07-06T14:45:00Z",
    likes: 55,
    comments: 8,
    price: "50,000",
    user: {
      name: "ThriftRack",
      avatar: "/avatar2.jpg",
      igHandle: "@thriftrack",
      followers: 2100,
      following: 500,
    }
  },
  {
    id: "3",
    caption: "SkinCare that shows your skin you care!",
    bio: "I love my job, It brings out the best in me and i'm sure i can bring out the best in your business to. 1 Corthinains 10:31❤️ ",
    img: "/sample3.jpg",
    createdAt: "2024-07-05T08:30:00Z",
    likes: 23,
    comments: 5,
    price: "150,000",
    user: {
      name: "Beautyworks",
      avatar: "/avatar1.jpg",
      igHandle: "@glowskin",
      followers: 4000,
      following: 200,
    }
  },
  {
    id: "4",
    caption: "Fresh thrift drop 🔥",
    bio: "I love my job, It brings out the best in me and i'm sure i can bring out the best in your business to. 1 Corthinains 10:31❤️ ",
    img: "/sample2.jpg",
    createdAt: "2024-07-06T14:45:00Z",
    likes: 55,
    comments: 8,
    price: "50,000",
    user: {
      name: "ThriftRack",
      avatar: "/avatar2.jpg",
      igHandle: "@thriftrack",
      followers: 1100,
      following: 800,
    }
  },
];

export const users = {
  Glow_Skincare: {
    avatar: "/avatar1.jpg",
    igHandle: "@glowskin",
    bio: "Natural glow for every skin ✨",
    followers: 1200,
    following: 350,
    post: {
      caption: "Check out this amazing product!",
      img: "/sample1.jpg",
      createdAt: "2024-07-05T08:30:00Z",
      likes: 23,
      comments: 5,
      price: "10,000",
    }
  },
  ThriftRack: {
    avatar: "/avatar2.jpg",
    igHandle: "@thriftrack",
    bio: "Affordable thrifts, big vibes 👕🔥",
    followers: 2100,
    following: 500,
    posts: {
      id: "2",
      caption: "Fresh thrift drop 🔥",
      img: "/sample2.jpg",
      createdAt: "2024-07-06T14:45:00Z",
      likes: 55,
      comments: 8,
      price: "50,000",
    }
  },
  Beautyworks: {
    avatar: "/avatar1.jpg",
    igHandle: "@beautyworks",
    bio: "We care for your beauty 💄",
    followers: 900,
    following: 250,
    posts: {
      id: "3",
      caption: "SkinCare that shows your skin you care!",
      img: "/sample3.jpg",
      createdAt: "2024-07-05T08:30:00Z",
      likes: 23,
      comments: 5,
      price: "150,000",
    }
  }

};
