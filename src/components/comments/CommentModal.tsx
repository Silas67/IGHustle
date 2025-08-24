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
import CommentBox from "./CommentBox";

const CommentModal = ({ onClose }: { onClose: () => void }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, username: "ThriftZone", comment: "Love this look! 🔥" },
    { id: 2, username: "GlowUpSkin", comment: "Available in stock?" },
    { id: 3, username: "GlowUpSkin", comment: "Available in stock?" },
    { id: 4, username: "GlowUpSkin", comment: "Available in stock?" },
    { id: 5, username: "GlowUpSkin", comment: "Available in stock?" },
    { id: 6, username: "GlowUpSkin", comment: "Available in stock?" },
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
    <div className="block sm:flex items-center justify-center overlay max-sm:bg-white max-h-screen sm:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:max-w-4xl bg-white dark:bg-gray-900 sm:rounded-lg overflow-hidden fixed h-[95vh] bottom-0 rounded-t-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:text-white text-black z-50"
        >
          <MdClose className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-16 sm:h-[calc(100vh_-_48px)] overflow-hidden sm:rounded-sm auto-rows-[100%]">
          {/* IMAGE - DESKTOP*/}
          <div className="hidden sm:block bg-gray-100">
            <Image
              src="/avatar1.jpg"
              width={500}
              height={500}
              alt="Post"
              className="w-full !h-full object-contain"
            />
          </div>

          {/* COMMENT SECTION */}
          <div className="flex flex-col justify-between bg-white dark:bg-neutral-900">
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-center gap-4 py-4 sm:hidden border-b px-8">
              <button onClick={onClose}>
                {" "}
                <BsChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex w-full items-center justify-center font-medium ">
                <p>Comments</p>
              </div>
              <button>
                {" "}
                <BsSend />
              </button>
            </div>

            {/* User Comment */}
            <div className="flex gap-3 p-3 border-b">
              {/* Avatar */}
              <div>
                <Image
                  src="/avatar2.jpg"
                  width={40}
                  height={40}
                  alt="User"
                  className="rounded-full w-10 h-10 object-cover"
                />
              </div>

              {/* Avatar Name */}
              <div>
                <p className="font-medium">
                  @thriftgoddess{" "}
                  <span className="text-sm font-normal text-gray-500">
                    • 2h ago
                  </span>
                </p>
                {/* Caption */}
                <p>✨ New drop just landed!</p>
              </div>
            </div>

            {/* Comment Section*/}
            <div className="overflow-y-scroll px-4 py-4 flex-1 h-[74%] sm:h-[66%]">
              {comments.length > 0 ? (
                comments.map((c) => (
                  <CommentBox
                    key={c.id}
                    username={c.username}
                    comment={c.comment}
                  />
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
                  className="flex-1 text-sm bg-transparent px-3 py-2 rounded-full outline-none"
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

          {/* COMMENT CONTAINER */}
          {/* <div className="bg-white">
     
            

          
            <CommentBox
              postData={postData}
              postId={postModal.id}
              extraClass="h-[74%] sm:h-[66%]"
            />

            
            <div>
              <div className="md:flex justify-between py-3 px-2 hidden">
                <div className="flex space-x-4 items-center">
                  <button onClick={handelLike}>
                    {!liked ? (
                      <BsHeart className="btn" />
                    ) : (
                      <BsHeartFill className="btn text-red-500" />
                    )}
                  </button>
                  <button onClick={() => {}}>
                    <BsChat className="btn" />
                  </button>
                  <BsSend className="btn " />
                </div>
                <div>
                  <BsBookmark className="btn" />
                </div>
              </div>

              {postData?.likes && (
                <div
                  className="px-2 cursor-pointer hidden md:block"
                  onClick={() => {}}
                >
                  {postData?.likes.length} likes
                </div>
              )}

              <AddComment id={postData?._id} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
