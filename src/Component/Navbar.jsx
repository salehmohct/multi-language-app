import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import i18n from "./I18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addDirection } from "../RTK/Slice/DirectionSlice";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

function NavbarEx() {
  const [Lang, setLang] = useLocalStorage("languge", i18n.language);
  useEffect(() => {
    i18n.changeLanguage(Lang);
  }, [Lang]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  if (Lang === "en") {
    dispatch(addDirection("ltr"));
  } else {
    dispatch(addDirection("rtl"));
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">{t("Home")}</Nav.Link>
            <Nav.Link href="#link">{t("Link")}</Nav.Link>
            <Nav.Link
              onClick={() => {
                Lang === "en" ? setLang("ar") : setLang("en");
              }}
            >
              {Lang === "en" ? "ar" : "en"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEx;
