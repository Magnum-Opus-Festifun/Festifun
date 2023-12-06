import { Button, Form, Row, Col } from "react-bootstrap";
import { Person, LockFill, Google, Facebook, Apple } from "react-bootstrap-icons";

function Login() {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
        height="50"
        style={{ marginLeft: "30%", marginTop: "30%", marginBottom: "0%" }}
        alt="Navbar Logo"
      />
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <Person /> Email
          </Form.Label>
          <Form.Control type="email" placeholder="Email/username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <LockFill /> Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Login
          </Button>
        </div>

        <div className="mt-5">
          <p>Atau lanjutkan melalui:</p>
          <div className="ms-auto mt-5">
            <Row className="ms-5">
              <Col>
                <Button variant="primary">
                  <Google size={35} />
                </Button>{' '}
              </Col>
              <Col>
                <Button variant="primary">
                  <Facebook size={35} />
                </Button>{' '}
              </Col>
              <Col>
                <Button variant="primary">
                  <Apple size={35} />
                </Button>{' '}
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
