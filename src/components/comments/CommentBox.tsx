import React from "react";
import Image from "next/image";

interface ICommentProp {
  username: string;
  comment: string;
}
const CommentBox = ({ username, comment }: ICommentProp) => {
  return (
    <div className="overflow-y-auto px-3 py-2 flex-1">
      <div className="mb-4 flex gap-4">
        <div>
          <Image
            src="/avatar2.jpg"
            width={40}
            height={40}
            alt="User"
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium">{username}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
