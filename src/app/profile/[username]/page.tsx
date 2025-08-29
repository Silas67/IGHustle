import React from "react";
import ProfileInfo from "@/components/profilePage/profileInfo";
import PostsGallery from "@/components/profilePage/PostsGallery";
import { posts } from "@/lib/data/postsData";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
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
