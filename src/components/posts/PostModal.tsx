// /components/PostModal.tsx
import React from "react";
import Image from "next/image";

interface PostModalProps {
  post: {
    img: string;
    caption: string;
    user: {
      name: string;
      avatar: string;
      igHandle: string;
    };
  };
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Image
            width={100}
            height={100}
            src={post.user.avatar}
            className="w-10 h-10 rounded-full"
            alt="User Avatar"
          />
          <div>
            <p className="font-semibold">{post.user.name}</p>
            <p className="text-sm text-gray-500">{post.user.igHandle}</p>
          </div>
        </div>

        <Image
          width={100}
          height={100}
          src={post.img}
          alt="Post Image"
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <p className="text-gray-800 text-sm">{post.caption}</p>
      </div>
    </div>
  );
};

export default PostModal;
