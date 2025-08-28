import React from "react";

const ProfileButtons = () => {
  return (
    <div>
      <div>
        <div className="flex items-center max-sm:justify-center gap-4">
          <button className="py-1 px-4 bg-blue-400 rounded-md w-full text-center hover:bg-blue-500 text-white">
            Follow
          </button>
          <div className="py-1 px-4 dark:bg-neutral-800 bg-neutral-200 rounded-md w-full text-center">
            Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButtons;
