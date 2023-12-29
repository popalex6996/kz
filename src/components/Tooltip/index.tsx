import React, { ReactNode } from "react";
import "./index.css";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="tooltip-wrapper">
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
