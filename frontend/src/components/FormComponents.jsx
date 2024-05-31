import { Container, Row, Col } from "react-bootstrap";

const FormComponents = ({ children }) => {
  return (
    <Container>
      <Row className="justify-container-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponents;
