import { useState} from 'react'
import React from 'react';
import './Style.css';

const Cart = (props) => {
  const { name, email, uriImg } = props.dataUser;
  
  return (
    <div className="bloc--imag col-sm-3"id="" >  
        <img  src={uriImg} className=""  onClick={props.clickCart} alt="image--profil" />
      <div className="bloc--info">
        <h2 className="">{name}</h2>
        <h2 className="">{email}</h2>
      </div>
    </div>)
  
  
  }
export default Cart;