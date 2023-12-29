import React from "react";
import "./index.css";
import images from "../../assets/images";

const Socials: React.FC = () => {
  const onClick = () => {};

  return (
    <div className="socials-wrapper">
      <button onClick={onClick} className="socials-btn">
        <img src={images.facebook} alt="facebook sign up" />
      </button>
      <button onClick={onClick} className="socials-btn">
        <img src={images.google} alt="google sign up" />
      </button>
    </div>
  );
};
export default Socials;
