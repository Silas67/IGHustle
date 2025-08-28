import React from "react";

export interface IPostFollowCount {
  followers: number;
  followings: number;
}

const PostsFollowsCount = ({ followers, followings }: IPostFollowCount) => {
  return (
    <div className="flex max-md:justify-around py-2 items-center gap-4">
      <div className="text-center">
        <span className="max-md:block md:mr-2 font-semibold">0</span>
        Posts
      </div>
      <div className="text-center cursor-pointer">
        <span className="max-md:block md:mr-2 font-semibold">{followers}</span>
        Followers
      </div>
      <div className="text-center cursor-pointer">
        <span className="max-md:block md:mr-2 font-semibold">{followings}</span>
        Followings
      </div>
    </div>
  );
};

export default PostsFollowsCount;
