import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid="md" className="d-flex flex-column contenedor">
      <Row as="header" className="align-items-center text-white px-3">
        <h1>Título</h1>
      </Row>
      <Row as="main">
        <Col as="section" sm={12} md={8} className="pb-5">
          <h2>Titular</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit libero laboriosam amet vero
            veritatis
            ipsa ad
          nostrum aliquam alias nihil ratione quam error deserunt dolorem impedit perspiciatis, eum sint.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sequi autem consequatur illum!
            Deleniti
            dignissimos
            delectus molestiae asperiores iste vero accusamus optio iure. Debitis unde repudiandae cumque
            voluptas
            dolorum
            eveniet!
        </p>
        </Col>
        <Col as="section" sm={12} md={4} className="pb-5">
          <h2>Categorías</h2>
          <ul>
            <li>Noticias de deporte</li>
            <li>Noticias de ocio</li>
            <li>Noticias de política</li>
            <li>Noticias de espectáculo</li>
          </ul>
          <h2>Otras cosas</h2>
          <ul>
            <li>Nosequé</li>
            <li>Nosecuánto</li>
            <li>Talycual</li>
          </ul>
        </Col>
      </Row>
      <Row as="footer" className="justify-content-center align-items-center text-white pt-4">
        <p>Texto del footer</p>
      </Row>
    </Container>
  );
}

export default App;
