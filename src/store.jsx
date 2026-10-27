import { configureStore, createSlice } from '@reduxjs/toolkit'



let user = createSlice({// useState의 역할
	name : 'user',
	initialState : { name : 'kim', age: 20 },
	reducers:{
		changeName(state){
			state.name = 'park'
		},
		increaseAge(state, action){
			state.age += action.payload
		},
	}
});

export let { changeName, increaseAge } = user.actions

let stock = createSlice({// useState의 역할
	name : 'stock',
	initialState : [10, 11, 12]
});

let userStock = createSlice({// useState의 역할
	name : 'userStock_name',
	initialState : [
		{id : 0, name : 'White and Black', count : 2},
		{id : 2, name : 'Grey Yordan', count : 1}
	],
	reducers:{
		addCount(state, action){
			state[action.payload].count ++
		}
	}
});

export let { addCount } = userStock.actions


export default configureStore({
  reducer: {
	user: user.reducer,
	stock: stock.reducer,
	userStock: userStock.reducer,

  }
}) 