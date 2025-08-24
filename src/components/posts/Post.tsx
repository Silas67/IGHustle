// /components/Post.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import CommentModal from "../comments/CommentModal";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

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
  user,
}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [bouncing, setBouncing] = useState(false);
  const [bouncingsaved, setBouncingSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));

    setBouncing(true);
    setTimeout(() => setBouncing(false), 300);
  };

  const handleSaved = () => {
    setSaved(!saved);

    setBouncingSaved(true);
    setTimeout(() => setBouncingSaved(false), 300);
  };
  return (
    <div
      className=" py-4 mb-8 bg-background dark:bg-transparent max-w-md"
      id={id}
    >
      {/* Avartar */}
      <div className="flex items-center justify-between mb-4 px-4">
        <div className="flex items-center gap-3">
          <Image
            src={user.avatar}
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
            alt="User Avatar"
          />
          <div>
            <p className="font-semibold lowercase">{user.name}</p>
          </div>
        </div>
        <Icon icon="mage:dots" width="24" height="24" />
      </div>

      {/* Post Image */}
      <div className="relative">
        <Image
          src={img}
          width={100}
          height={100}
          className="w-full aspect-[3/4] h-full object-cover z-10 mb-4"
          alt="Post"
        />
        {/* <div className="absolute top-4 right-4 py-2 px-4 text-foreground rounded-full bg-background/70  h-[20px] flexcent ">
          {price}
        </div> */}
      </div>

      {/* Likes, Comments and Captions */}
      <div className="px-4">
        <div className="flex gap-4 text-sm items-center justify-between">
          <div className="flex gap-4">
            {/* Like Button */}
            <button
              className={`flex items-center gap-2 transition-discrete duration-1000 ${
                bouncing ? "transform -translate-y-1 scale-[1.1]" : ""
              }`}
              onClick={toggleLike}
            >
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
            {/* Comment Button */}
            <button
              onClick={() => setShowComments(true)}
              className="flex items-center gap-2 "
            >
              <Icon
                icon="iconamoon:comment-light"
                width="24"
                height="24"
                className="transform scale-x-[-1]"
              />{" "}
              {comments}
            </button>
          </div>

          <div className="text-sm">
            {/* Bookmark Button */}
            <button
              onClick={handleSaved}
              className={` ${
                bouncingsaved
                  ? "transform -translate-y-1 transition-discrete scale-[1.1] duration-300"
                  : ""
              }`}
            >
              {saved ? <FaBookmark width={24} /> : <FaRegBookmark width={24} />}
            </button>
          </div>
        </div>
        {/* Caption */}
        <div className="flex items-center gap-2 my-2">
          <p className="font-bold lowercase">{user.name}</p>
          <p className=" text-neutral-800  dark:text-neutral-200 line-clamp-1">
            {caption}
          </p>
        </div>

        {/* Date Posted */}
        <div className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-col gap-2">
          {new Date(time).toLocaleDateString()}
        </div>
      </div>

      {showComments && <CommentModal onClose={() => setShowComments(false)} />}
    </div>
  );
};

export default Post;
