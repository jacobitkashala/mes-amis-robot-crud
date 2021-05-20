import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Cart from "./Cart";
import Loader from "./Loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let robotDataAll = [{ image: "" }];
        data.map((item, index) => {
          robotDataAll = [...data];
          robotDataAll[index].image = "https://robohash.org/" + index;
        });
        this.setState({
          robotData: robotDataAll,
          robotDataRef: robotDataAll,
        });
      });
  }

  render() {
    let Robotlength = [...this.state.robotData];
    let dataRobot = this.state.robotData;
    let robotChosen = this.state.robotChosen;
    let isClickedCart = this.state.isClickedCart;

    return (
      <div className="container ">
        {Robotlength.length === 0 ? (
          <div>
            <Loader />
          </div>
        ) : (
          <>
            <div className="row container--title">
              <h1 className="col-sm-5 title">MES AMIS ROBOTS</h1>
              <input className="col-sm-5" onChange={this.onSeach} />
            </div>
            <div>
              <div className="row container-galerie">
                <Cart
                  clickCart={this.onClickCart}
                  dataRobot={dataRobot}
                  robotChosen={robotChosen}
                  isClickedCart={isClickedCart}
                  hiddenClickCart={this.hiddenClickCart}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Home;
