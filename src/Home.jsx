import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Cart from "./Cart";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userDataref: [],
      userFind: "true",
      userName: "",
    };
  }
  onSeach = (event) => {
    let caractere = event.target.value;
    let tabref = this.state.userDataref;

    let regexp = new RegExp(`^${caractere}`, "i");
    let newuserData = tabref.filter((element) => {
      return regexp.test(element.name);
    });

    this.setState({
      userData: newuserData,
    });
  };

  componentDidMount() {
    const urlImg = "https://robohash.org";

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let list = data.map(({ id, name, email }) => {
          let uriImg = urlImg + "/" + id;
          return { id, name, email, uriImg };
        });
        //console.log(list)
        this.setState({
          userData: list,
          userDataref: list,
        });
      });
  }

  getCollection = (event) => {
    let collectionImg = document.getElementsByClassName("selectEle");
    console.dir(event);
    //return collectionImg;
  };

  render() {
    let newsData = this.state.userData;
    this.getCollection();
    return (
      <div className="contenaire-body">
        <div className="row ">
          <h1 className="title">MES AMIS ROBOTS</h1>
          <input className="col-3" onChange={this.onSeach} />
        </div>
        <div className="container-image row">
          {newsData.map((user, key) => {
            this.state.userData.key = key;
            return (
              <Cart
                className="contenaire--cart "
                dataUser={user}
                key={key}
                onClick={()=>{
                  this.getCollection();
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Home;
