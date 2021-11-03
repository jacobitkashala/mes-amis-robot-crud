import React from 'react';



export default function DetailRobot(dataRobot, displayInputRobot, dispalyValue, EditeurRobot) {
	//onClick={hiddenClickCart}
	return (
		<>
			{
				dataRobot.map((infoRobot, index) => {

					return (
						<div key={index} className="col-sm-1" id="" >
							<img src={infoRobot.image} className="img-fluid" alt={infoRobot.id} />
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
				})
			}
		</>
	)
}
