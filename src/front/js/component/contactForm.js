import React, { useRef, useState, setShow } from "react";
import emailjs from "emailjs-com";
import { Modal, Button } from "react-bootstrap";

export const ContactForm = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_portfolio",
        form.current,
        "user_40gT501S2nuqnbm1EYjzt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        form.current.reset()
      );
  };

  return (
    <form className="mb-4" ref={form} onSubmit={sendEmail}>
      <div className="mb-2 fs-2">
        <label htmlFor="exampleFormControlInput1" className="form-label mb-0">
          Name
        </label>
        <input
          type="text"
          className="form-control fs-3"
          id="exampleFormControlInput1"
          placeholder="Andrea Villa"
        />
      </div>
      <div className="mb-2 fs-2">
        <label htmlFor="exampleFormControlInput1" className="form-label mb-0">
          Email
        </label>
        <input
          type="email"
          className="form-control fs-3"
          id="exampleFormControlInput2"
          placeholder="andrea@mail.com"
        />
      </div>
      <div className="mb-4 fs-2">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label mb-0"
        >
          Message
        </label>
        <textarea
          className="form-control fs-3"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-lg btn-dark fs-3 pb-0 pt-1"
        style={{ width: "20%" }}
        onClick={handleShow}
      >
        Send
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="text-center"
      >
        <Modal.Body className="p-4 pt-5">
          <h1>
            Thank you for your message! I will try to respond as soon as I can.
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="pb-0 pt-1" onClick={handleClose}>
            <h2 className="m-0">Close</h2>
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};
