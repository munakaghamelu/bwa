import { useState } from "react";
import "./popup.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Popup(){
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="popup">
      <button onClick={toggleModal}>Open modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}