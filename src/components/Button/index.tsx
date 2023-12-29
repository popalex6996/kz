import React from "react";
import "./index.css";
import Spacer from "../Spacer";

interface ButtonProps {
  label?: string;
  icon?: "user" | "cart-shopping" | "bars" | "chevron-up";
  color?: string;
  iconLeft?: boolean;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  color = "white",
  iconLeft = false,
  className,
  onClick,
}) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {iconLeft && icon && (
      <i className={`fa-solid fa-${icon}`} style={{ color }} />
    )}
    {iconLeft && icon && label && <Spacer width={5} />}
    {label && <span> {label}</span>}
    {!iconLeft && icon && label && <Spacer width={5} />}
    {!iconLeft && icon && (
      <i className={`fa-solid fa-${icon}`} style={{ color }} />
    )}
  </button>
);
export default Button;
