import { React } from "react";
import { Button, Form } from "react-bootstrap";
import { Person, LockFill,Google, Facebook, Apple, Telephone, Envelope } from "react-bootstrap-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Regisright() {
  return (
    <div>
         <img
            src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
            height="50"
           style={{marginLeft:"30%",marginTop:"30%", marginBottom:"0%"}}
            alt="Navbar Logo"
          />
         <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>

         <Form.Group className="mb-3" controlId="formName">
        <Form.Label><Person />Nama</Form.Label> 
        <Form.Control  type="text" placeholder= "Nama Lengkap"  /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label><Telephone/>Nomor HP</Form.Label>
        <Form.Control type="number" placeholder="Nomor HP" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><Envelope />Email</Form.Label> 
        <Form.Control  type="email" placeholder="Email/Username"  /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><LockFill/>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" type="submit">
        Register
      </Button>
      </div>
      <div className="mt-5">
        <p>Atau lanjutkan melalui:</p>
            <div className="ms-5 mt-5" >
              <Row className="ms-2">
              <Col><Button variant="primary"><Google size={35}/></Button>{' '}  </Col>
            <Col><Button variant="primary"><Facebook size={35}/></Button>{' '}</Col>
            <Col><Button variant="primary"><Apple size={35 }/></Button>{' '}</Col>
              </Row>
            

            </div>
      </div>
    </Form>
    </div>
   
  );
}

export default Regisright;