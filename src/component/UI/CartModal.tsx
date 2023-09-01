import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { createPortal } from "react-dom";
import PdfDocument from "./PdfDocument";
import Cart from "./Cart";
interface ICartModal {
  showBtn: boolean;
  handleClose: () => void;
}

const CartModal = (props: ICartModal) => {
  const { showBtn, handleClose } = props;
  // const portalElement = document.getElementById("overlay") as HTMLElement;
  const [aquiModal, setAquiModal] = useState<boolean>(false);
  useEffect(() => {
    console.log("from modal: ", showBtn);
    console.log("aquiModal: ", aquiModal);
  }, [showBtn]);

  return (
    <>
      <div>
        <Modal show={showBtn} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Finalizar compra</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Cart />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setAquiModal(true);
                handleClose();
              }}
            >
              Fechar
            </Button>
            <PDFDownloadLink
              document={<PdfDocument data={"navi"} />}
              fileName="buy-list.pdf"
            >
              <Button
                variant="primary"
                onClick={() => console.log(Math.random() * 2)}
              >
                Finish
              </Button>
            </PDFDownloadLink>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CartModal;
