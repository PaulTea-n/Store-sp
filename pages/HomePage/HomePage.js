import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAC } from "../../store/cart/actionCreators";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const modalData = useSelector((store) => store.modal.modalData);

  return (
    <>
      <ProductList products={products} />

      <Modal
        text="Додати товар до 'КОШИКА'?"
        confirmBtnAction={() => dispatch(addToCartAC(modalData))}
      />
    </>
  );
};

export default HomePage;
