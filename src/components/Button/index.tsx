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
    | "up-right-from-square"
    | "trash"
    | "comment-medical"
    | "plus"
    | "minus"
    | "ban"
    | "heart";
  color?: string;
  iconLeft?: boolean;
  className?: string;
  iconClassName?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  color = "white",
  iconLeft = false,
  className,
  iconClassName,
  onClick,
}) => (
  <button className={`btn ${className}`} onClick={onClick}>
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
