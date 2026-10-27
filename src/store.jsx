import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.jsx'

// 파일분할 store/userSlice.jsx
// let user = createSlice({// useState의 역할
// 	name : 'user',
// 	initialState : { name : 'kim', age: 20 },
// 	reducers:{
// 		changeName(state){
// 			state.name = 'park'
// 		},
// 		increaseAge(state, action){
// 			state.age += action.payload
// 		},
// 	}
// });
// 
// export let { changeName, increaseAge } = user.actions

let userStock = createSlice({// useState의 역할
	name : 'userStock_name',
	initialState : [
		{id : 0, name : 'White and Black', count : 2},
		{id : 1, name : 'Grey Yordan', count : 1},
		{id : 2, name : 'Black Shoes', count : 3},
		{id : 3, name : 'Yellow Belt', count : 10},
	],
	reducers:{
		addCount(state, action){
			state[action.payload].count += 1
		},
		alignProd(state){
			console.log(state)
			state.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
		},
		addList(state, action){
			state.push(action.payload)
			console.log('addList')
		},
	}
});
export let { addCount, alignProd, addList } = userStock.actions

export default configureStore({
  reducer: {
	user: user.reducer,
	// stock: stock.reducer,
	userStock: userStock.reducer,

  }
}) 