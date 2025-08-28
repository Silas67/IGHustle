import React from "react";
import ProfileInfo from "@/components/profilePage/profileInfo";
import PostsGallery from "@/components/profilePage/PostsGallery";
import { posts } from "@/lib/data/postsData";

export default function Page({ params }: { params: { username: string } }) {
  const username = params.username as string;
  const post = posts.find((post) => post.user.name === username);
  const user = post?.user;

  return (
    <div className="min-h-screen">
      <ProfileInfo
        username={username}
        img={user?.avatar}
        bio={post?.bio}
        followers={user?.followers}
        followings={user?.following}
      />
      <PostsGallery />
    </div>
  );
}
