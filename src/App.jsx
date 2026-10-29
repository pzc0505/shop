import { createContext, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import logoimg from './assets/img/logo.jpg'
import './App.css'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.jsx'
import axios from 'axios';
import Cart from './routes/Cart.jsx'

export let Context1 = createContext();



function App() {
  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
  })
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* GNB */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img src={logoimg} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/0')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>장빠구니</Nav.Link>
            {/* <Nav.Link onClick={()=>{ navigate('/about')}}>어바웃</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('/about/member')}}>멤버</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('/about/location')}}>위치</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('/event')}}>이벤트</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('/event/one')}}>이벤트1</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate('/event/two')}}>이벤트2</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{ navigate(-1)}}>뒤로가기</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* //GNB */}

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="prod-list-wrap">
              <Container>
                <Row>
                  { shoes.map((a,i)=>{
                    return <Card key={shoes[i].id} shoes={shoes} i={i} />
                  })}
                </Row>
              </Container>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{ 
                  // // 1.
                  // let copy = [...shoes]
                  // copy.push(...result.data)
                  // setShoes(copy)

                  // // 2.
                  // let copy = [...shoes, ...결과.data]
                  // setShoes(copy)
                  
                  // 3.
                  setShoes([...shoes, ...result.data]);
                }).catch(()=>{
                  alert('실패함')
                });

              }}>더보기</button>
            </div>
          </>
        } />
        
        <Route path="/detail/:id" element={
            <Context1.Provider value={{재고, shoes}}>
              <Detail shoes={shoes} /> 
            </Context1.Provider>
          } />

        <Route path="/cart" element={ <Cart /> } />
      </Routes>
      

    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4" key={props.shoes[props.i].id} onClick={()=>{
      // 1.현재 로컬스토리지 값을 불러옴
      let watchlist = localStorage.getItem('watched');
      console.log(watchlist);
      
      // 1.1. 불러온 데이터를 배열형식으로 전환함
      let cvtData = JSON.parse(watchlist);
      
      // 2.클릭한 상품의 index를 현재 배열에 push함
      // if( !cvtData.includes(props.i) ){
        console.log('있어');
        cvtData.push(props.i);
        console.log(cvtData);
      // }

      // 3.push한 인덱스를 다시 로컬 스토리지로 전달함.
      localStorage.setItem('watched', JSON.stringify(cvtData))
      
    }}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </div>
  )
}

// function About(){
//   return(
//     <>
//       <div>회사정보임</div>
//       <Outlet></Outlet>
//     </>
//   )
// }

// function Event(){
//   return(
//     <>
//       <h4>오늘의 이벤트</h4>
//       <Outlet></Outlet>
//     </>
//   )
// }


export default App
