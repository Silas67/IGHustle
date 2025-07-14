// /components/Post.tsx
import React from "react";
import Image from "next/image";

interface PostProps {
  id: string;
  caption: string;
  img: string;
  time: string;
  likes: number;
  comments: number;
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
  return (
    <div className=" py-4 mb-8 bg-background" id={id}>
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
          <p className="text-sm text-gray-500">{user.igHandle}</p>
        </div>
      </div>

      <Image
        src={img}
        width={100}
        height={100}
        className="w-full h-64 object-cover rounded-md mb-4"
        alt="Post"
      />

      <div className="px-2">
        <p className="text-sm text-gray-800 mb-2">{caption}</p>
        <div className="text-xs text-gray-500 flex flex-col gap-2">
          <div className="flex gap-4">
            <span>❤️ {likes}</span>
            <span>💬 {comments}</span>
          </div>

          <span>{new Date(time).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
