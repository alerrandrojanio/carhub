import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  buttonType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
