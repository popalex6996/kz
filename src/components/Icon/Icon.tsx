import React from "react";
import images from "../../assets/images";

interface IconProps {
  name: keyof typeof images | string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ name, height, width }) => (
  <img
    src={images[name as keyof typeof images]}
    alt={name}
    height={height}
    width={width}
  />
);
export default Icon;
