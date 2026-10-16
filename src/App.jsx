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
      {/* GNB */}
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
      {/* //GNB */}

      {/* 메인베너 */}
      <div className="main-bg"></div>
      {/* //메인베너 */}

      {/* 상품목록 */}
      <div className="prod-list-wrap">
        <Container>
          <Row>
            {
              shoes.map((a,i)=>{
                return(
                  <Card key={shoes[i].id} shoes={shoes} i={i} />
                )
              })
            }
          </Row>
        </Container>
      </div>
      {/* //상품목록 */}
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

export default App
