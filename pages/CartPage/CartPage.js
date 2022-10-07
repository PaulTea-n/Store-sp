import React, { useContext } from "react";
import CartList from "../../components/CartList/CartList";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItemAC,
  cleanProductsToBuy,
} from "../../store/cart/actionCreators";
import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomInput from "../../components/CustomInput/CustomInput";
import styles from "../CartPage/CartPage.module.scss";

const CartPage = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((store) => store.modal.modalData);
  const carts = useSelector((state) => state.cart.carts);

  // =====================form============
  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    address: "",
    numberPhone: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log(carts);
    resetForm();
    dispatch(cleanProductsToBuy());
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Min 2 symbols")
      .max(20, "Max 20 symbols")
      .required("Name field is requierd"),

    lastName: yup
      .string()
      .min(2, "Min 2 symbols")
      .max(20, "Max 20 symbols")
      .required("Lastname field is requierd"),

    age: yup
      .number()
      .min(14, "Age should be greater than 14")
      .max(110, "Age should be lesser than 110")
      .required("Age filed is required"),

    address: yup.string().required("Address filed is required"),

    numberPhone: yup.number().required("Phone number filed is required"),
  });

  // ======================form============
  return (
    <>
      <ul>
        <h1>КОШИК</h1>

        <div className={styles.cartPage}>
          <CartList />
          <Modal
            text="ВИДАЛИТИ цей товар?"
            confirmBtnAction={() => dispatch(deleteCartItemAC(modalData))}
          />
        </div>
      </ul>

      <>
        <h1>Оформити замовлення</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid }) => (
            <Form className={styles.form}>
              <CustomInput name="name" type="text" placeholder="Name" />
              <CustomInput name="lastName" type="text" placeholder="Lastname" />
              <CustomInput name="age" type="text" placeholder="Age" />
              <CustomInput name="address" type="text" placeholder="Address" />
              <CustomInput
                name="numberPhone"
                type="text"
                placeholder="Number Phone"
              />

              <button
                className={styles.checkoutBtn}
                type="submit"
                disabled={!isValid}
              >
                ЗАМОВИТИ
              </button>
            </Form>
          )}
        </Formik>
      </>
    </>
  );
};

export default CartPage;
