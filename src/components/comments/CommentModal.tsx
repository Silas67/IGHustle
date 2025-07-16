import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import {
  BsBookmark,
  BsChat,
  BsChevronLeft,
  BsHeart,
  BsHeartFill,
  BsSend,
} from "react-icons/bs";

const CommentModal = ({ onClose }: { onClose: () => void }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, username: "ThriftZone", comment: "Love this look! 🔥" },
    { id: 2, username: "GlowUpSkin", comment: "Available in stock?" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: Date.now(), username: "You", comment: newComment },
    ]);
    setNewComment("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:max-w-4xl bg-white dark:bg-gray-900 sm:rounded-lg overflow-hidden relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:text-white text-black z-50"
        >
          <MdClose className="w-6 h-6" />
        </button>

        {/* IMAGE */}
        <div className="hidden sm:block bg-gray-100">
          <Image
            src="/demo.jpg"
            width={500}
            height={500}
            alt="Post"
            className="w-full h-full object-cover"
          />
        </div>

        {/* COMMENT SECTION */}
        <div className="flex flex-col justify-between bg-white dark:bg-gray-900">
          {/* MOBILE HEADER */}
          <div className="flex items-center gap-4 p-3 sm:hidden border-b">
            <BsChevronLeft className="w-5 h-5" onClick={onClose} />
            <p className="flex-1 font-medium">Comments</p>
            <BsSend />
          </div>

          {/* USER CAPTION */}
          <div className="flex gap-3 p-3 border-b">
            <Image
              src="/blank-profile.jpg"
              width={40}
              height={40}
              alt="User"
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p className="font-semibold">
                @thriftgoddess{" "}
                <span className="text-sm font-normal text-gray-500">
                  • 2h ago
                </span>
              </p>
              <p>✨ New drop just landed!</p>
            </div>
          </div>

          {/* COMMENTS */}
          <div className="overflow-y-auto px-3 py-2 flex-1">
            {comments.length > 0 ? (
              comments.map((c) => (
                <div key={c.id} className="mb-3">
                  <p className="text-sm font-medium">{c.username}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {c.comment}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No comments yet</p>
            )}
          </div>

          {/* ACTION BAR */}
          <div className="border-t p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-4">
                <button onClick={handleLike}>
                  {liked ? (
                    <BsHeartFill className="text-red-500" />
                  ) : (
                    <BsHeart className="text-gray-500" />
                  )}
                </button>
                <BsChat />
                <BsSend />
              </div>
              <BsBookmark />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {liked ? "You and 24 others liked this" : "24 likes"}
            </p>

            {/* ADD COMMENT */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Image
                src="/blank-profile.jpg"
                width={32}
                height={32}
                alt="You"
                className="rounded-full w-8 h-8 object-cover"
              />
              <input
                type="text"
                className="flex-1 text-sm bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full outline-none"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="text-blue-600 disabled:text-blue-300 text-sm"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
