import React from "react";
import "./index.css";
import Button from "../Button";
import Tooltip from "../Tooltip";
import { useTranslation } from "react-i18next";

const ScrollToTop: React.FC = () => {
  const { t } = useTranslation();
  const onClick = () => {
    //@ts-ignore
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Tooltip text={t("scrollToTop")}>
      <Button
        onClick={onClick}
        className="scroll-to-top"
        icon="chevron-up"
        iconClassName="fa-solid"
      />
    </Tooltip>
  );
};
export default ScrollToTop;
