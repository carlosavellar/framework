import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { ReactNode, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createPortal } from "react-dom";
import PdfDocument from "./PdfDocument";
interface ICartModal {
  children: ReactNode;
  show: boolean;
  handleClose: (value: boolean) => void;
}

const CartModal = (props: ICartModal) => {
  const { show, handleClose, children } = props;
  const portalElement = document.getElementById("overlay") as HTMLElement;
  const [aquiModal, setAquiModal] = useState<boolean>(false);
  useEffect(() => {
    // console.log("from modal: ", show);
    // console.log("aquiModal: ", aquiModal);
  }, [show]);

  return (
    <div>
      {createPortal(
        <>
          <Modal
            show={show ? !aquiModal : show}
            onHide={() => setAquiModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setAquiModal(true)}>
                Close
              </Button>

              <Button
                variant="primary"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-nocheck Error
                onClick={() => console.log(Math.random() * 2)}
              >
                Oder
              </Button>
              <PDFDownloadLink
                document={<PdfDocument data={""} />}
                fileName="buy-list.pdf"
              >
                Gerr
              </PDFDownloadLink>
            </Modal.Footer>
          </Modal>
        </>,
        portalElement
      )}
    </div>
  );
};

export default CartModal;
