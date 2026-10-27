import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import { Context1 } from './../App.jsx'

import { addList } from './../store.jsx'

import { useDispatch, useSelector } from 'react-redux'


function Detail(props){
	let [count, setCount] = useState(0);
	let [msgBox, setMsgBox] = useState(true);
	let [inputVal, setInputVal] = useState(0)
	let [tablist, setTablist] = useState(0);

	// mount, update
	useEffect(()=>{
		// console.log('setMsgBox')
		setTimeout(()=>{
			setMsgBox(false)
		},2000)
	}, [msgBox]);


	useEffect(()=>{
		// console.log(typeof inputVal)
	}, [inputVal]);
	

	let {id} = useParams();
	let 찾은상품 = props.shoes.find( (item)=> item.id == id);

	let [mvmt, setMvmt ] = useState('');

	useEffect(()=>{
		let a = setTimeout(()=>{
			setMvmt('mvmt-fade-in'); 
		}, 10)
		return () => clearTimeout(a)
	}, [mvmt])

	let dispatch = useDispatch();

	return (
		<div className={`container ${mvmt}`}>
			
			<div className="row">
				{
					msgBox == true ? <AlertBox /> : null
				}
				{count}
				<button type="button" onClick={()=>{ setCount(count+1) }}>버튼</button>
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${Number(찾은상품.id) + 1}.jpg`} width="100%" />
				</div>

				<input type="text" value={inputVal} onChange={ (e)=>{ 
					let val = e.target.value
					setInputVal(val);
					console.log(val)
				}}/>

				{
					isNaN(inputVal) && <AlertBox2 />
				}


				<div className="col-md-6">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}원</p>
					<button className="btn btn-danger" onClick={()=>{
						dispatch(addList(
							{id : 4, name : 찾은상품.title, count : 1},
						))
					}}>주문하기</button> 
				</div>

				<div style={ { marginTop: 30 }}></div>
				
				<Nav variant="pills" defaultActiveKey="link-0">
					<Nav.Item>
						<Nav.Link eventKey="link-0" onClick={ ()=>{ setTablist(0)} }>탭0</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-1" onClick={ ()=>{ setTablist(1)} }>탭1</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-2" onClick={ ()=>{ setTablist(2)} }>탭2</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tabcont tablist={tablist} />
				
				<div style={ { paddingBottom: 100 } }></div>
			</div>
		</div> 
	)
}

function Tabcont(prop){
	let {재고} = useContext(Context1);

	if( prop.tablist == 0 ){
		return (
			<div>
				탭0
			</div>
		)
	}else if( prop.tablist == 1 ){
		return <div>탭1</div>
	}else if( prop.tablist == 2 ){
		return <div>탭2</div>
	}
}

// function Tabcont({tablist}){
// 	if( tablist == 0 ){
// 		return <div>탭0</div>
// 	}else if( tablist == 1 ){
// 		return <div>탭1</div>
// 	}else if( tablist == 2 ){
// 		return <div>탭2</div>
// 	}
// }


function AlertBox(){
	return(
		<div className="alert alert-warning">
			2초이내 구매시 할인
		</div>
	)
}


function AlertBox2(){
	return(
		<div className="alert alert-warning" style={ { marginTop: 10 }}>
			숫자만 입력 가능합니다.
		</div>
	)
}



export default Detail