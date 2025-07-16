import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 flex items-center justify-between w-full py-3 md:px-[50px] px-6  bg-background z-50">
      <div className=" flex justify-center">
        <h1 className="font-DancingS text-3xl">IgHuss</h1>
      </div>

      <div className="flex items-center outline-none">
        <Link href={"/chat"} className="outline-none">
          <Icon icon="ph:chats-circle" width="25" height="25" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
