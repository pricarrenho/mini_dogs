import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType = "primary" | "secondary";

export type ButtonProps = {
  children?: string;
  styleType: ButtonStyleType;
  fullWidth?: boolean;
  as?: React.ElementType;
} & ButtonType;
