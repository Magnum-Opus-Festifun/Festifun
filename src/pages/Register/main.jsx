import React from 'react';
import {Col, Row } from 'react-bootstrap';
import Regisleft from "./Components/regisleft";
import Regisright from './Components/regisright';

const Register = () => {
  return (
    <div>
        <Row className="landing">
          <Col><Regisleft /></Col>

          <Col><Regisright /></Col>
        </Row>
        </div>
  );
};

export default Register;