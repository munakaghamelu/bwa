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
      <button onClick={toggleModal}>Click me</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="dialog_text">
          Help us continue to support amazing Black Women Artists by making a donation!
          <div className="supportbtn"><a href="https://www.paypal.com/donate/?hosted_button_id=VLXYQ3WDAY8H6" target="_blank"><h2>SUPPORT</h2></a></div>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
  // https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda
}