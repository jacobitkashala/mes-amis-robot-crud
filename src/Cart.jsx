import React, { useState } from "react";
import EditeurRobot from "./EditeurRobot"
import "./Style.css";

const Cart = ({ dataRobot, robotChosen, isClickedCart, clickCart, hiddenClickCart, }) => {

    const [dispalyValue, setDispalyValue] = useState(false);

    const displayInputRobot = () => {

        setDispalyValue(currentValue => !currentValue);
    }

    function showRobt(data) {
        let cartRobot = data.map((infoRobot, index) => {

            return (
                <div key={index} className="bloc--imag col-sm-3" id="" >
                    <img src={infoRobot.image} className="" onClick={() => { clickCart(infoRobot.id) }} alt={infoRobot.id} />
                    <div className="bloc--info" >
                        <h2 className="" > Name: {infoRobot.username} </h2>
                        <h2 className="" > User name: {infoRobot.name} </h2>
                        <h2 className="" > Email: {infoRobot.email} </h2>
                        <h2 className="" > Téléephone: {infoRobot.phone} </h2>
                    </div>
                </div>

            );
        });
        return cartRobot;
    }

    function showRobtDetail(data, displayInputRobot, dispalyValue, EditeurRobot) {

        let robot = data.map((infoRobot, index) => {

            return (
                <div key={index} className="col-sm-7" id="" >
                    <img src={infoRobot.image} className="img-fluid" onClick={hiddenClickCart} alt={infoRobot.id} />
                    <div className="bloc--info" >
                        <h3 className="" > User name: {infoRobot.username} </h3>
                        <h3 className="" > Name: {infoRobot.name} </h3>
                        <h3 className="" > Email: {infoRobot.email} </h3>
                        <h3 className="" > Télephone: {infoRobot.phone} </h3> {
                        }
                    </div>
                    <div className="infosupp" onClick={displayInputRobot} >

                        <div className="cicle" > </div>
                        <div className="cicle" > </div>
                        <div className="cicle" > </div>
                    </div>
                    {dispalyValue && <EditeurRobot />}
                </div>
            );
        });
        return robot;
    }

    let cartRobot = showRobt(dataRobot);
    let cartRobotChosen = showRobtDetail(robotChosen, displayInputRobot, dispalyValue, EditeurRobot);

     return <> {isClickedCart ? cartRobotChosen : cartRobot} </>;
    // return <cartRobot/>;
};
export default Cart;