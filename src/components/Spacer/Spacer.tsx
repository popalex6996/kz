import React from "react";

interface SpacerProps {
  width?: number;
  height?: number;
}

const Spacer: React.FC<SpacerProps> = ({ height, width }) => (
  <div style={{ width, height }} />
);
export default Spacer;
