import React from "react";
import "./Style.css";

const Cart = ({dataRobot,robotChosen,  isClickedCart,clickCart,hiddenClickCart,}) => {
  

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

  function showRobtDetail(data, displayInputRobot,dispalyValue) {
    console.log(dispalyValue);
   
    let robot = data.map((infoRobot, index) => {
      
      const updateData=()=>{
      console.log("mise ajour effectuer");
      };
   

      return (
        <div key={index} className="bloc--robot col-sm-3" id="">
          <img
            src={infoRobot.image}
            className="img-fluid"
            onClick={hiddenClickCart}
            alt={infoRobot.id}
          />
          <div className="bloc--info" >
            <h2 className="">User name :{infoRobot.username}</h2>
            <h2 className="">Name :{infoRobot.name} </h2>
            <h2 className="">Email :{infoRobot.email}</h2>
            <h2 className="">Télephone :{infoRobot.phone}</h2>
            {/* <h2 className=""> website :{infoRobot.website}</h2>
            <h2 className=""> Company name :{infoRobot.company.name}</h2>
            <h2 className="">
              Company catchPhrase :{infoRobot.company.catchPhrase}
            </h2> */}
          </div>
          <div className="infosupp" onClick={displayInputRobot}>
            <div className="cicle"></div>
            <div className="cicle"></div>
            <div className="cicle"></div>
          </div>
          <div className="inputinforobt" style={{opacity:dispalyValue}}>
            {console.log(dispalyValue)}
            <div>
              <label>name : </label>
              <input className="modifier"  />
            </div>
            <div>
              <label>username</label>
              <input className="col-sm-12 modifier"  />
            </div>
            <div>
              <label>E-mail</label>
              <input className="col-sm-12 modifier"  />
            </div>
            <input type="button" className="col-sm-12 validerinfos" value="Submit" onClick={updateData} />
          </div>
        </div>
      );
    });
    return robot;
  }

  let cartRobot = showRobt(dataRobot);
  let cartRobotChosen = showRobtDetail(robotChosen);

  return <>{isClickedCart ? cartRobotChosen : cartRobot}</>;
};
export default Cart;
