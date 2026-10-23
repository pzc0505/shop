import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){
	let [count, setCount] = useState(0);
	let [msgBox, setMsgBox] = useState(true)

	// mount, update
	useEffect(()=>{
		console.log('useEffect')
		setTimeout(()=>{ setMsgBox(false); },2000);

	}, []);

	let {id} = useParams();
	let 찾은상품 = props.shoes.find( (item)=> item.id == id);

	return (
		<div className="container">
			<div className="row">
				{
					msgBox == true ? <AlertBox /> : null
				}
				{count}
				<button type="button" onClick={()=>{ setCount(count+1) }}>버튼</button>
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${Number(찾은상품.id) + 1}.jpg`} width="100%" />
				</div>
				<input type="text" />
				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}원</p>
					<button className="btn btn-danger">주문하기</button> 
				</div>
			</div>
		</div> 
	)
}


function AlertBox(){
	return(
		<div className="alert alert-warning">
			2초이내 구매시 할인
		</div>
	)
}



export default Detail