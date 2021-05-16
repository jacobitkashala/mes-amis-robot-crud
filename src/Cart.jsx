import React from "react";
import "./Style.css";

const Cart = ({
  dataRobot,
  robotChosen,
  isClickedCart,
  clickCart,
  hiddenClickCart,
}) => {
  function showRobt(data) {
    let cartRobot = data.map((infoRobot, index) => {
      return (
        <div key={index} className="bloc--imag col-sm-3" id="">
          <img
            src={infoRobot.image}
            className=""
            onClick={() => {
              clickCart(infoRobot.id);
            }}
            alt={infoRobot.id}
          />
          <div className="bloc--info">
            <h2 className="">Name:{infoRobot.username}</h2>
            <h2 className="">User name:{infoRobot.name} </h2>
            <h2 className="">Email:{infoRobot.email}</h2>
            <h2 className="">Téléephone:{infoRobot.phone}</h2>
          </div>
        </div>
      );
    });
    return cartRobot;
  }
  function showRobtDetail(data) {
    console.log(data)
    let robot = data.map((infoRobot, index) => {
      return (
        <div key={index} className="bloc--imag col-sm-3" id="">
          <img 
            src={infoRobot.image}
            className="img-fluid"
            onClick={hiddenClickCart}
            alt={infoRobot.id}
          />
          <div className="bloc--info">
            <h2 className="">User name :{infoRobot.username}</h2>
            <h2 className="">Name :{infoRobot.name} </h2>
            <h2 className="">Email :{infoRobot.email}</h2>
            <h2 className="">Télephone :{infoRobot.phone}</h2>
            <h2 className=""> website :{infoRobot.website}</h2>
            <h2 className=""> Company name :{infoRobot.company.name}</h2>
            <h2 className=""> Company catchPhrase :{infoRobot.company.catchPhrase}</h2>
           
            
          </div>
        </div>
      );
    });
    return robot;
  }

  let cartRobot = showRobt(dataRobot);
  let cartRobotChosen = showRobtDetail(robotChosen);
  console.log(isClickedCart);
 
  return <>{isClickedCart ? cartRobotChosen : cartRobot}</>;
};
export default Cart;
