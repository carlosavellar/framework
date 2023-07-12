import { Container, Navbar } from "react-bootstrap";
import Header from "./Header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Content</p>
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
