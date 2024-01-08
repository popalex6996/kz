import React, { ChangeEvent, FC, useCallback, useEffect, useRef } from "react";
import "./index.css";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  range: { from: number; to: number };
  setRange: ({ from, to }: { from: number; to: number }) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  range,
  setRange,
}) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const rangeEL = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(range.from);
    const maxPercent = getPercent(maxValRef.current);

    if (rangeEL.current) {
      rangeEL.current.style.left = `${minPercent}%`;
      rangeEL.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [range.from, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(range.to);

    if (rangeEL.current) {
      rangeEL.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [range.to, getPercent]);

  return (
    <>
      <input
        type="range"
        step="10"
        min={min}
        max={max}
        value={range.from}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(Number(event.target.value), range.to - 1);
          setRange({ from: value, to: range.to });
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        // @ts-ignore
        style={{ zIndex: range.from > max - 100 && "5" }}
      />
      <input
        type="range"
        step="10"
        min={min}
        max={max}
        value={range.to}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(Number(event.target.value), range.from + 1);
          setRange({ from: range.from, to: value });
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="range-slider">
        <div className="slider__track"></div>
        <div ref={rangeEL} className="slider__range" />
        <input
          type="text"
          className="slider__left-value"
          value={range.from}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(event.target.value), range.to - 1);
            if (isNaN(value) || value >= range.to || value < min) return;
            setRange({ from: value, to: range.to });
            minValRef.current = value;
          }}
        />
        <input
          type="text"
          className="slider__right-value"
          value={range.to}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(event.target.value), range.from + 1);
            if (isNaN(value) || value <= range.from || value > max) return;
            setRange({ from: range.from, to: value });
            maxValRef.current = value;
          }}
        />
      </div>
    </>
  );
};

export default MultiRangeSlider;
