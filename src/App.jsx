import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import logoimg from './assets/img/logo.jpg'
import './App.css'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.jsx'

function App() {
  let [shoes] = useState(data);
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
            <Nav.Link onClick={()=>{ navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about')}}>어바웃</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about/member')}}>멤버</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about/location')}}>위치</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event')}}>이벤트</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event/one')}}>이벤트1</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event/two')}}>이벤트2</Nav.Link>
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
            </div>
          </>
        } />
        <Route path="/detail" element={ <Detail /> } />
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰 받기</div> } />
        </Route>
        <Route path="*" element={ <div>404</div> } />
      </Routes>
    </div>
  )
}

function Card(props){
  return (
    <Col key={props.shoes[props.i].id}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </Col>
  )
}

function About(){
  return(
    <>
      <div>회사정보임</div>
      <Outlet></Outlet>
    </>
  )
}

function Event(){
  return(
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  )
}


export default App
