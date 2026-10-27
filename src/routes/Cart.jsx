import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart(){

	// let state = useSelector((state)=>{ return state })
	// console.log(state)
	// let user = useSelector((state)=> state.user )
	// console.log(user)
	
	// let state = useSelector((state)=>{ return state })
	// console.log(state.userStock)
	let state = useSelector((state)=> state)

	return(
		<div>
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
						state.userStock.map((e, i)=>{
							return(
								<tr>
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
										<button>+</button>
										<button>-</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table> 
		</div>
	)
}

export default Cart