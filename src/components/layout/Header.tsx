import Link from "next/link";
import { BsSend } from "react-icons/bs";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 flex items-center justify-between w-full py-3 md:px-[50px] px-6  bg-background z-50">
      <div className=" flex justify-center">
        <h1 className="font-DancingS text-3xl">Sellit</h1>
      </div>

      <div className="flex items-center outline-none">
        <Link href={"/chat"} className="outline-none">
          <BsSend className="w-6 h-6 text-primary" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
