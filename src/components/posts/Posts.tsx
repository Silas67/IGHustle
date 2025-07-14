"use client";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { posts as fakePosts } from "../data/postsData";

interface PostType {
  id: string;
  caption: string;
  img: string;
  createdAt: string;
  likes: number;
  comments: number;
  user: {
    name: string;
    avatar: string;
    igHandle: string;
  };
}

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    setPosts(fakePosts);
  }, []);

  return (
    <div className="max-w-md  py-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            caption={post.caption}
            img={post.img}
            time={post.createdAt}
            likes={post.likes}
            comments={post.comments}
            user={post.user}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No posts available</p>
      )}
    </div>
  );
};

export default Posts;
