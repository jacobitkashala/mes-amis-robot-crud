import logo from "./logo.svg";
import React from "react";
import data from "./data.json";
const Cart = (props) => {
  const { name, email, uriImg } = props.dataUser;
  const idItem = props.Removeid;
  // console.(idItem)
  const showCart = () => {
    let cart = document.getElementById("carte--id");
    
    // cart.classList.remove("container-image");
    // cart.classList.add("remove");

  };
  return (
    <div className="contenaire-carte col-4" id="carte--id" onClick={showCart}>
      <img
        src={uriImg}
        className="contenaire-carte col-12"
        alt="image--profil"
      />
      <h2 className="text-center col-10">{name}</h2>
      <h2 className="text-center col-10">{email}</h2>
    </div>
  );
};

export default Cart;
