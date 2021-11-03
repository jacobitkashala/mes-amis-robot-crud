
import { configureStore } from '@reduxjs/toolkit';
import robot from './reducerRobotAsync ';


export default configureStore({
	reducer: {   
		robot:robot
	},
});
