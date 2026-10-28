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
		{id : 0, name : 'White and Black', count : 1},
		{id : 1, name : 'Red Knit', count : 1},
		{id : 2, name : 'Grey Yordan', count : 1},
	],
	reducers:{
		alignProd(state){
			console.log(state)
			state.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
		},
		addCount(state, action){
			let num = state.findIndex((a)=>{ return a.id === action.payload })
			state[num].count ++
		},
		addList(state, action){
			let isProdExist = state.find( state => state.id === action.payload.id )

			// console.log(isProdExist)
			if( isProdExist ){
				console.log('있다')
				
				isProdExist.count++
			}else{
				console.log('없다')

				state.push(action.payload)
			}
		},
		removeList(state, action){
			let targetIndex  = state.findIndex( state => state.id === action.payload )
			// console.log('action.payload : ' + action.payload)
			// console.log('targetIndex : ' + targetIndex )

			if( targetIndex !== -1 ){
				state.splice(targetIndex, 1);
			}
		}
	}
});
export let { addCount, alignProd, addList, removeList } = userStock.actions

export default configureStore({
  reducer: {
	user: user.reducer,
	// stock: stock.reducer,
	userStock: userStock.reducer,

  }
}) 