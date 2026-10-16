import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import logoimg from './assets/img/logo.jpg'
import './App.css'
import data from './data.js'

function App() {
  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoimg} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="prod-list-wrap">
        <Container>
          {/* 방법1 */}
          <Row>
            {
              shoes.map((a,i)=>{
                return(
                  <Card key={shoes[i].id} shoes={shoes} i={i} />
                )
              })
            }
          </Row>

          {/* 방법2 */}
          <Row>
            <Card2 shoes={shoes[0]} i={0}></Card2>
            <Card2 shoes={shoes[1]} i={1}></Card2>
            <Card2 shoes={shoes[2]} i={2}></Card2>
          </Row>
        </Container>
      </div>
    </div>
  )
}

// 숙제
// 1. 상품카드 컴포넌트화
// 2. 데이터바인딩
// 3. 반복문 사용하여 상품 목록

// 방법1
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

// 방법2: 그냥 데이터 단조로울 때 간단하게 처리
function Card2(props){
  return (
    <Col key={props.shoes.id}>
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App
