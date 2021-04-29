import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Cart from "./Cart";
import CartInfo from "./CartInfo";
import Loader from "./Loader";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userDataref: [],
      userFind: "true",
      userName: "",
      showAll:true,
      chosen:[],
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

  onClickCart=(event)=>{
    let  userData=[];
    let chosenElement="";
    let lengthString="";
    let chosenId="";
    let chosenInfos=[];

    userData=this.state.userData;
    chosenElement=event.target.src;
    lengthString=chosenElement.length;
    chosenId=chosenElement.charAt(lengthString-1);
    
    // console.log(chosenElement)
    // console.log(lengthString)
    // console.log(chosenId)

    //chosenId=chosenElement.charAt(2);
    chosenInfos=userData.filter(elment=> elment.id==chosenId);
    //console.log(chosenInfos);
    this.setState({chosen:chosenInfos});
    this.setState({showAll:!this.state.showAll})

  }

  componentDidMount() {
    const urlImg = "https://robohash.org";

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let list = data.map(({ id, name, email }) => {
          let uriImg = urlImg + "/" + id;
          return { id, name, email, uriImg };
        });
       
        this.setState({
          userData: list,
          userDataref: list,
        });
      });
  } 
  
  render() {
    let newsData = this.state.userData;
   return(
        <div className="container ">
      { 
        (newsData.length===0)?
         (  <div>
              <Loader/>
          </div>):(
            <> 
              <div className="row container--title">
                <h1 className="col-sm-5 title">MES AMIS ROBOTS</h1>
                <input className="col-sm-5" onChange={this.onSeach} />
              </div>
              <div>
            {
            (this.state.showAll)? (
              <>
                <div className="row container-galerie">
                  {newsData.map((user, key) => {
                    this.state.userData.key = key;
                    return (
                      <Cart
                        clickCart={this.onClickCart}
                        dataUser={user}
                        key={key}                
                      />
                    );
                  })}     
                </div>
              </>
            ):(
                <CartInfo carteData={this.state.chosen}  clickImg={this.onSeach}/>       
              )
            }
          </div>
            </>
          )
        }
    </div>
    )
  }
}
export default Home;
