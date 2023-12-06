
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../beranda.scss';
const SearchingComponent = () => {
  return (
    <Container className='search-container'>
      <Row className="align-items-center search-row">
        {/* Bagian Kiri */}
        <Col xs={5}>
          <div className='search-item'>
            <p>Cari Event</p>
            <Form.Control type="text" placeholder="Cari Even kamu disini" />
          </div>
        </Col>

        {/* Bagian Tengah */}
        <Col xs={5}>
          <div className='search-item'>
            <p>Jenis Event</p>
            <Form.Control as="select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </div>
        </Col>

        {/* Bagian Kanan */}
        <Col xs={1}>
          <div className="text-center search-item">
            <p>&nbsp;</p>
            <Button className="align-bottom search-button">Cari</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchingComponent;
