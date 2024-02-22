import React, { useState } from "react";
import "./index.css";

interface StarsRateProps {
  rate: number;
  changeRate?: (rate: number) => void;
  color?: string;
  activeColor?: string;
}

const StarsRate: React.FC<StarsRateProps> = ({
  rate,
  changeRate,
  color = "#eee",
  activeColor = "#711d1d",
}) => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="stars-rate">
      {[...Array(5)].map((_, index) => {
        return changeRate ? (
          <div
            key={index}
            onClick={() => changeRate(index + 1)}
            onMouseOver={() => setHover(index + 1)}
            onMouseLeave={() => setHover(null)}
          >
            <i
              className="fa-solid fa-star"
              style={{
                color: hover
                  ? hover >= index + 1
                    ? activeColor
                    : color
                  : rate >= index + 1
                    ? activeColor
                    : color,
                cursor: "pointer",
              }}
            />
          </div>
        ) : (
          <div key={index}>
            <i
              className="fa-solid fa-star"
              style={{ color: rate >= index + 1 ? activeColor : color }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default StarsRate;
