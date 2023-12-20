import React from "react";
import Icon from "../Icon/Icon";
import "./index.css";

interface ButtonProps {
  label?: string;
  type?: "hamburger" | "cart" | "user";
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

const sizeTable = {
  hamburger: { width: 29, height: 16 },
  cart: { width: 30, height: 30 },
  user: { width: 30, height: 30 },
};

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  disabled = false,
  className,
  onClick,
}) => (
  <button onClick={onClick} disabled={disabled} className={`btn ${className}`}>
    {label && <span> {label}</span>}
    {type && (
      <Icon
        name={type}
        height={sizeTable[type].height}
        width={sizeTable[type].width}
      />
    )}
  </button>
);
export default Button;
