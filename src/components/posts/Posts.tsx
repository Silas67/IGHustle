"use client";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostModal from "./PostModal";
import { posts as fakePosts } from "@/lib/data/postsData";

interface PostType {
  id: string;
  caption: string;
  img: string;
  createdAt: string;
  likes: number;
  comments: number;
  price: string;
  user: {
    name: string;
    avatar: string;
    igHandle: string;
  };
}

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  useEffect(() => {
    setPosts(fakePosts);
  }, []);

  return (
    <div className="max-w-md py-">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} onClick={() => setSelectedPost(post)}>
            <Post
              id={post.id}
              caption={post.caption}
              img={post.img}
              time={post.createdAt}
              likes={post.likes}
              comments={post.comments}
              price={post.price}
              user={post.user}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No posts available</p>
      )}

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default Posts;
