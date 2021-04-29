import React from 'react';
import './Style.css';

const CartInfo = (props) => {
    let infoChesen=props.carteData[0];

    console.log(infoChesen)
    let objetKey=[];
    objetKey=Object.keys(infoChesen);
  return (
    <div className="newcontenaire-carte"id="" >  
    
        <img  src={infoChesen['uriImg']} className=""  onClick={props.clickImg} alt="image--profil" />
      <div className="">
        <h2 className="">{infoChesen['username']} </h2>
        <h2 className="">{infoChesen['name']} </h2>
        <h2 className="">{infoChesen['email']}</h2>
      </div>
        {/* <input type="button" value="retour"/> */}
    </div>
    )
  }
export default CartInfo;