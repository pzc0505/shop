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
          <Row>
            {
              shoes.map((e,i)=>{
                return(
                  <Card key={shoes[i].id} shoes={shoes} i={i} />
                )
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}

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

// 숙제1. 상품 컴포넌트화
// 숙제2. 데이터바인딩
// 숙제3. 반복문 사용하여 상품 목록 

export default App
