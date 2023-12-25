import React from "react";
import "./index.css";
import Icon from "../Icon";

interface ButtonProps {
  label?: string;
  type?:
    | "hamburger"
    | "cart"
    | "user"
    | "facebook"
    | "google"
    | "instagramLink"
    | "youtubeLink"
    | "facebookLink";
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

const sizeTable = {
  hamburger: { width: 29, height: 16 },
  cart: { width: 30, height: 30 },
  user: { width: 30, height: 30 },
  facebook: { width: 40, height: 40 },
  google: { width: 40, height: 40 },
  facebookLink: { width: 40, height: 40 },
  instagramLink: { width: 40, height: 40 },
  youtubeLink: { width: 40, height: 40 },
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
