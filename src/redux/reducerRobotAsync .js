import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRobotAsync = createAsyncThunk(
	'Robot/getRobotAsync',
	async () => {
		const resp = await axios.get('https://robot-api-fetch.herokuapp.com/api/robots');
		if (resp.ok) {
			const robots = await resp.json();
			return { robots };
		}
	}
);
export const addRobotAsync = createAsyncThunk(
	'addRobot/addRobotAsync',
	async (payload) => {
		const resp = await fetch('https://robot-api-fetch.herokuapp.com/api/robot', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
				{
					name: payload.name,
					username: payload.username,
					email: payload.email,
					companie: payload.companie,

				}),
		});
		if (resp.ok) {
			const companie = await resp.json();
			return { companie };
		}
	}
);


// export const deleteTodoAsync = createAsyncThunk(
// 	'todos/deleteTodoAsync',
// 	async (payload) => {
// 		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
// 			method: 'DELETE',
// 		});

// 		if (resp.ok) {
// 			return { id: payload.id };
// 		}
// 	}
// );

export const companieAsyncSlice = createSlice({
	name: 'robot',
	initialState: [],
	extraReducers: {
		[getRobotAsync.fulfilled]: (state, action) => {
			// console.log(action.payload)
			return action.payload.robots;
		},
		[addRobotAsync.fulfilled]: (state, action) => {
			return action.payload.companie;

		},
		// [deleteTodoAsync.fulfilled]: (state, action) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id);
		// },
	},
});

export default companieAsyncSlice.reducer;
