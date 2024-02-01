import React, { useState } from "react";
import "./index.css";
import Button from "../Button";
import { Measurement } from "../../utilities/types";

interface NumberInputProps {
  amount: number;
  step: number;
  maxAmount: number;
  measurement: Measurement;
  hideBtns?: boolean;
}
const NumberInput: React.FC<NumberInputProps> = ({
  amount,
  step,
  maxAmount,
  measurement,
  hideBtns = false,
}) => {
  const [value, setAmount] = useState(amount);
  const stepUp = () => {
    if (value + step > maxAmount) return;
    setAmount((prevState) => ++prevState);
  };

  const stepDown = () => {
    if (value - step < step) return;
    setAmount((prevState) => --prevState);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (+event.currentTarget.value > maxAmount) {
      setAmount(maxAmount);
    } else if (+event.currentTarget.value < step) {
      setAmount(step);
    } else setAmount(+event.currentTarget.value);
  };

  return (
    <div className="number-input">
      {!hideBtns && (
        <Button
          onClick={stepDown}
          icon="minus"
          iconClassName="fa-solid"
          className="amount-button"
        />
      )}
      <input
        id="quantity-input"
        className="quantity bg-light"
        type="number"
        value={value}
        step={step}
        onChange={onChange}
        disabled={hideBtns}
      />
      <span className="quantity-measurement">{measurement}</span>
      {!hideBtns && (
        <Button
          onClick={stepUp}
          icon="plus"
          iconClassName="fa-solid"
          className="amount-button"
        />
      )}
    </div>
  );
};

export default NumberInput;
