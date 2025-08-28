import React from "react";
import BackBtn from "../common/BackBtn";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import ProfileButtons from "./ProfileButtons";
import PostsFollowsCount from "./PostsFollowsCount";

export interface IProfileInfoProps {
  username: string;
  img?: string;
  bio?: string;
  followers?: number;
  followings?: number;
}

const profileInfo = ({
  username,
  img,
  bio,
  followers,
  followings,
}: IProfileInfoProps) => {
  return (
    <div>
      <BackBtn>
        <div>{username}</div>
        <BsThreeDotsVertical />
      </BackBtn>

      {/* Profile Content */}
      <div className="grid md:col-30-70 max-md:col-25-auto gap-x-6 items-center max-md:px-4 max-md:py-2">
        <div className="flex gap-4 items-start p-4">
          <div className="w-20 !h-20 md:w-48 md:!h-48">
            <Image
              src={img || ""}
              alt="/"
              width={100}
              height={100}
              className="w-20 !h-20 md:w-48 md:!h-48 object-cover rounded-full"
            />
          </div>
          <div className="flex px-4 flex-col">
            <h1 className="font-medium text-xl break-all">{username}</h1>
            <PostsFollowsCount
              followers={followers || 0}
              followings={followings || 0}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="md:hidden col-span-2 mt-3">
            <p className="md:full-row md:w-[60%] font-sans text-neutral-300">
              {bio || ""}
            </p>
          </div>
          <ProfileButtons />
        </div>
      </div>
    </div>
  );
};

export default profileInfo;
