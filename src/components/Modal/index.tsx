import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

interface ModalProps {
  onBackdropClick: () => void;
  isVisible: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onBackdropClick,
  isVisible,
  children,
}) => {
  if (!isVisible) return null;
  return ReactDOM.createPortal(
    <div onClick={onBackdropClick} className="modal-wrapper">
      <div className="children-wrapper" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,

    document.getElementById("modal-root")!,
  );
};

export default Modal;
