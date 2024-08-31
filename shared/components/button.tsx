"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  disabled: boolean;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, disabled, href }) => {

  return (
    <Link href={disabled ? "#" : href}>
      <button
        className={`w-full py-2 px-4 rounded-md text-white text-center transition-all duration-200 ease-in-out
        ${disabled
          ? "bg-gray-500 cursor-not-allowed opacity-50 border-gray-400"
          : "bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700"}`}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
};
