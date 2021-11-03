import React from 'react'

export default function EditeurRobot() {
    const robot={
        userName:'',
        name:'',
        email:'',
    }
    const inputName=(event)=>{
        let name=event.target.value
        robot.name=name;
    }
    const inputEmail=(event)=>{
        let email=event.target.value
        robot.email=email;
    }
    const inputUsername=(event)=>{
        let userName=event.target.value
        robot.name=userName;
    }
   const updateRobot=()=>{
    console.log("Mise a jour ok");
   }
  
    return(
        <div className = "inputinforobt">
        <div >
            <label > name: </label> 
            <input className = "modifier" onChange={inputName}/>
        </div> 
        <div >
            <label > username </label> 
            <input className = "col-sm-12 modifier"  onChange={inputUsername} />
        </div> 
        <div >
            <label > E-mail </label> 
            <input className = "col-sm-12 modifier" onChange={inputEmail}/>
        </div> 
        <input type = "button" className = "col-sm-12 validerinfos" value = "Submit" onClick={updateRobot}/> 
    </div> 
    )
}
