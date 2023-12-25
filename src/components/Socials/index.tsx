import React from "react";
import Button from "../Button";
import "./index.css";

const Socials: React.FC = () => {
  const onClick = () => {};

  return (
    <div className="socials-wrapper">
      <Button onClick={onClick} type="facebook" className="socials-btn" />
      <Button onClick={onClick} type="google" className="socials-btn" />
    </div>
  );
};
export default Socials;
