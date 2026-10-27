import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, alignProd } from './../store.jsx'
import { changeName, increaseAge } from './../store/userSlice.jsx'

function Cart(){

	// let state = useSelector((state)=>{ return state })
	// console.log(state)
	// let user = useSelector((state)=> state.user )
	// console.log(user)
	
	// let state = useSelector((state)=>{ return state })
	// console.log(state.userStock)
	let state = useSelector((state)=> state)
	let dispatch = useDispatch();

	return(
		<div>
			<div style={ { marginBottom: 30} }>
				<h2 style={ { display: 'inline-block'} }>{state.user.name}의 장바구니 ({state.user.age}세)</h2>
				<button onClick={()=>{ dispatch( increaseAge(10)) }} >나이추가</button>
			</div>
			
			<button onClick={()=>{ dispatch( alignProd()) }} >정렬</button>
			<Table>
				<thead>
					<tr>
					<th>#</th>
					<th>상품명</th>
					<th>수량</th>
					<th>변경하기</th>
					</tr>
				</thead>
				<tbody>
					{
						state.userStock.map((e, i) =>
							<tr key={i}>
								<td>
									{state.userStock[i].id}	
								</td>
								<td>
									{state.userStock[i].name}
								</td>
								<td>
									{state.userStock[i].count}
								</td>
								<td>
									<button onClick={()=>{
										dispatch(addCount(i))
									}}>+</button>
								</td>
							</tr>
						)
					}
				</tbody>
			</Table> 
		</div>
	)
}

export default Cart