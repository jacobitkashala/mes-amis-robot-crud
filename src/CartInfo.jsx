import React from 'react';
import './Style.css';

const CartInfo =React.forwardRef( function CartInfo(props,ref) {
    let infoChesen=props.carteData[0];

   /**
    * {infoChesen['username']}
    * {infoChesen['uriImg']}
    * {infoChesen['email']}
    * {infoChesen['name']}
    *  */ 
  return (
    <div className="newcontenaire-carte"id="" >  
    
        <img  src="" className="" ref={ref}   alt="image--profil" />
      <div className="">
        <h2 className=""> </h2>
        <h2 className=""> </h2>
        <h2 className=""> </h2>
      </div>
        {/* <input type="button" value="retour"/> */}
    </div>
    )
  })
export default CartInfo;