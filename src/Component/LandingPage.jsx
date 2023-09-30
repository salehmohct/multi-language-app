import NavbarEx from "../Component/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const { t } = useTranslation();
  const Direction = useSelector((state) => state.Direction);
  return (
    <div className="LandingPage" style={{ direction: Direction }}>
      <NavbarEx />
      <Container className="content">
        <Row>
          <Col className="info" md={6}>
            <h1>{t("mainTitle")}</h1>
            <Button variant="danger">{t("button")}</Button>{" "}
          </Col>
          <Col md={6}>
            <Image
              className="rounded"
              src={require("../images/advertising1.jpg")}
              alt="advertising"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
