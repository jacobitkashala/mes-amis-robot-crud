import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Cart from "./Cart";
// import bdRobot from "./robotsDatabase"
//import Loader from "./Loader";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // robotData:bdRobot,
            // robotDataRef:bdRobot,
            robotData: [],
            robotDataRef: [],
            robotChosen: [],
            isClickedCart: false,
        };
    }
    onSeach = (event) => {
        let value = event.target.value.toLowerCase();
        let seachRobot = [...this.state.robotDataRef];
        let dataResultat = seachRobot.filter((robot) => {
            return (
                robot.username.toLowerCase().includes(value) ||
                robot.name.toLowerCase().includes(value)
            );
        });

        this.setState({
            robotData: dataResultat,
        });
    };

    onClickCart = (idRobot) => {
        this.setState({ isClickedCart: true });
        let Robots = [...this.state.robotData];

        let robotSelect = Robots.filter((robot) => {
            return robot.id === idRobot;
        });
        this.setState({ robotChosen: robotSelect });
    };
    hiddenClickCart = () => {
        this.setState({ isClickedCart: false });
    };

    componentDidMount() {

        // fetch("https://robot-api-fetch.herokuapp.com/api/robots")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // let robotDataAll = [{ image: "" }];
        //         console.log(data);
               

        //         this.setState({
        //             robotData: data,
        //             robotDataRef: data,
        //         });
        //     });
    }

    render() {
        //let Robotlength = [...this.state.robotData];
        let dataRobot = this.state.robotData;
        let robotChosen = this.state.robotChosen;
        let isClickedCart = this.state.isClickedCart;

        return (
            < div className="container " >
                <div className="row container--title" >
                    <h2 className="col-sm-9 title" > MES AMIS ROBOTS </h2>
                    <input className="col-sm-7 inputgrabbed" onChange={this.onSeach} />
                </div >
                {/* <div className="row container-galerie" >
                    <Cart clickCart={this.onClickCart}
                        dataRobot={dataRobot}
                        robotChosen={robotChosen}
                        isClickedCart={isClickedCart}
                        hiddenClickCart={this.hiddenClickCart}
                    />
                </div > */}
            </div>
        );
    }
}
export default Home;