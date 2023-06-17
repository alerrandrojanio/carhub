"use client";

import Image from "next/image";
import { CustomButtonProps } from "../types";
import { title } from "process";

export function CustomButton({
  title,
  containerStyles,
  buttonType,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={buttonType || "button"}
      className={`relative flex flex-row items-center justify-center px-6 py-3 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
