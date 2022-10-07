import React from "react";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { addToCartAC } from "../../store/cart/actionCreators";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((store) => store.modal.modalData);

  return (
    <>
      <h1>ОБРАНЕ</h1>
      <FavoriteList />

      <Modal
        text="Додати товар до 'КОШИКА'?"
        confirmBtnAction={() => dispatch(addToCartAC(modalData))}
      />
    </>
  );
};

export default FavoritePage;
