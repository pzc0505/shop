import { configureStore, createSlice } from '@reduxjs/toolkit'



let user = createSlice({// useState의 역할
	name : 'user',
	initialState : 'kim'
});

let stock = createSlice({// useState의 역할
	name : 'stock',
	initialState : [10, 11, 12]
});


export default configureStore({
  reducer: {
	user: user.reducer,
	stock: stock.reducer,

  }
}) 