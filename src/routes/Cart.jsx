import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, addCount } from './../store.jsx'

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
			<h1>
				{state.user}의 장바구니
			</h1>

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