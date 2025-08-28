"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";

export interface IBackBtnProps {
  children: ReactNode;
}
const BackBtn = ({ children }: IBackBtnProps) => {
  const router = useRouter();
  return (
    <div className="md:hidden flex items-center justify-between mb-2 px-4  py-3 max-md:border-b">
      <div onClick={() => router.back()}>
        <BsChevronLeft />
      </div>
      {children}
    </div>
  );
};

export default BackBtn;
