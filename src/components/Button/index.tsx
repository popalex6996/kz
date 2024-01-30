import React from "react";
import "./index.css";
import Spacer from "../Spacer";

interface ButtonProps {
  label?: string;
  icon?:
    | "user"
    | "cart-shopping"
    | "cart-plus"
    | "bars"
    | "chevron-up"
    | "chevron-down"
    | "up-right-from-square"
    | "trash"
    | "comment-medical"
    | "plus"
    | "caret-left"
    | "caret-right"
    | "minus"
    | "ban"
    | "rotate"
    | "comment"
    | "store"
    | "circle-exclamation"
    | "expand"
    | "xmark"
    | "pen-to-square"
    | "circle-plus"
    | "trash-can"
    | "heart";
  color?: string;
  iconLeft?: boolean;
  disabled?: boolean;
  className?: string;
  iconClassName?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  color = "white",
  iconLeft = false,
  disabled = false,
  className,
  iconClassName,
  onClick,
}) => (
  <button className={`btn ${className}`} onClick={onClick} disabled={disabled}>
    {iconLeft && icon && (
      <i className={`fa-${icon} ${iconClassName} btn-icon`} style={{ color }} />
    )}
    {iconLeft && icon && label && <Spacer width={5} />}
    {label && <span> {label}</span>}
    {!iconLeft && icon && label && <Spacer width={5} />}
    {!iconLeft && icon && (
      <i className={`fa-${icon} ${iconClassName} btn-icon`} style={{ color }} />
    )}
  </button>
);
export default Button;
