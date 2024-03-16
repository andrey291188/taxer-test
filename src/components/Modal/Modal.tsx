import { createPortal } from "react-dom";
import { StyledBackdrop } from "./StyledModal.styled";
import { MouseEvent, ReactNode, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const modalRoot = document.querySelector("#root-modal") as HTMLDivElement;

interface ModalType {
  toggleModal: (value: boolean) => void;
  children: ReactNode;
}

const Modal = ({ children, toggleModal }: ModalType) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggleModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const backdropClick = (e: MouseEvent) => {
    if (e.currentTarget === e.target) {
      toggleModal(false);
    }
  };

  const handleClick = () => {
    toggleModal(false);
  };

  return createPortal(
    <StyledBackdrop onClick={backdropClick}>
      <div className="place">
        <button className="close-button" onClick={handleClick} type="button">
          <IoClose size={24} color="black" />
        </button>
        {children}
      </div>
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal;
