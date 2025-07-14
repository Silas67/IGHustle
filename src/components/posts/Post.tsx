// /components/Post.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PostProps {
  id: string;
  caption: string;
  img: string;
  time: string;
  likes: number;
  comments: number;
  price: string;
  user: {
    name: string;
    avatar: string;
    igHandle: string;
  };
}

const Post: React.FC<PostProps> = ({
  id,
  caption,
  img,
  time,
  likes,
  comments,
  price,
  user,
}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };
  return (
    <div className=" py-4 mb-8 bg-background dark:bg-transparent" id={id}>
      <div className="flex items-center gap-3 mb-2">
        <Image
          src={user.avatar}
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
          alt="User Avatar"
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {user.igHandle}
          </p>
        </div>
      </div>

      <div className="relative">
        <Image
          src={img}
          width={100}
          height={100}
          className="w-full h-64 object-cover  mb-4"
          alt="Post"
        />
        <div className="absolute top-4 right-4 py-2 px-3.5 text-[#f8f8f8] rounded-full bg-background/70  h-[20px] flexcent">
          {price}
        </div>
      </div>

      <div className="px-2">
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-2" onClick={toggleLike}>
            {liked ? (
              <Icon
                icon="mage:heart-fill"
                width="24"
                height="24"
                className="text-red-500"
              />
            ) : (
              <Icon icon="mage:heart" width="24" height="24" className="" />
            )}
            {likesCount}
          </button>
          <span className="flex items-center gap-2 ">
            <Icon
              icon="iconamoon:comment-light"
              width="24"
              height="24"
              className="transform scale-x-[-1]"
            />{" "}
            {comments}
          </span>
        </div>
        <p className="text-sm text-neutral-800-800 my-2 dark:text-neutral-200">
          {caption}
        </p>
        <div className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-col gap-2">
          {new Date(time).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Post;
