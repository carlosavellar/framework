import React, { ReactNode, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createPortal } from "react-dom";

interface ICartModal {
  children: ReactNode;
  show: boolean | undefined;
  handleClose: (value: boolean) => void;
}

const CartModal = (props: ICartModal) => {
  const { show, handleClose, children } = props;
  const portalElement = document.getElementById("overlay") as HTMLElement;
  useEffect(() => {
    console.log("from modal: ", show);
  }, [show]);

  return (
    <div>
      {createPortal(
        <>
          <Modal show={show} onHide={() => handleClose(false)}>
            <Modal.Title>Your final list</Modal.Title>

            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose(false)}>
                Close
              </Button>

              <Button
                variant="primary"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-nocheck Error
                onClick={() => handleClose(false)}
              >
                Oder
              </Button>
            </Modal.Footer>
          </Modal>
        </>,
        portalElement
      )}
    </div>
  );
};

export default CartModal;
