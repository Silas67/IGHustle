import React from "react";
import ProfileInfo from "@/components/profilePage/profileInfo";
import PostsGallery from "@/components/profilePage/PostsGallery";
import { posts } from "@/lib/data/postsData";

interface ProfileParams {
  username: string;
}

interface ProfilePageProps {
  params: Promise<ProfileParams>;
}
export async function page({ params }: ProfilePageProps) {
  const { username } = await params;
  const post = posts.find((post) => post.user.name === username);
  const user = post?.user;

  return (
    <div className="min-h-screen">
      <ProfileInfo
        username={username}
        img={user?.avatar ?? ""} // fallback to empty string
        bio={post?.bio ?? ""}
        followers={user?.followers ?? 0}
        followings={user?.following ?? 0}
      />
      <PostsGallery />
    </div>
  );
}
