import React from "react";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAC } from "../../store/modal/actionCreators";

const Modal = (props) => {
  const { confirmBtnAction, text } = props;
  const isOpenModalFirst = useSelector((store) => store.modal.isOpenModalFirst);
  const modalData = useSelector((store) => store.modal.modalData);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalAC());
  };

  if (!isOpenModalFirst) {
    return null;
  }

  return (
    <div data-testid="modal-container" className={styles.modalContainer}>
      <div className={styles.backgroundModal} onClick={closeModal}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1 className={styles.headerText}>{modalData.name}</h1>
          <button className={styles.closeButton} handleClick={closeModal}>
            X
          </button>
        </div>
        <div>
          <h2 className={styles.textModal}>{text}</h2>
          <div className={styles.btnContainer}>
            <Button
              className={styles.btnModal}
              text="НІ"
              handleClick={() => {
                closeModal();
              }}
              backgroundColor="#7A7A7A"
            />
            <Button
              className={styles.btnModal}
              handleClick={() => {
                confirmBtnAction();
                closeModal();
              }}
              text="ТАК"
              backgroundColor="#001542"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  confirmBtnAction: PropTypes.func,
  text: PropTypes.string,
};

Modal.defaultProps = {
  text: "Add to cart",
  confirmBtnAction: () => {},
};

export default Modal;
