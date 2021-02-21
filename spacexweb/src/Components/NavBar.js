import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "../index.css";
import logo from "../images/logo.png";

const styleNavBar = {
  position: "fixed",
  background: "var(--color3)",
  height: "4em",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  top: "0",
  zIndex: "100",
};
const linkSelected = {
  color: "grey",
  textDecoration: "none",
  cursor: "default",
  background: "black",
  color: "white",
  borderRadius: "4px",
};

const linkStyled = {
  color: "black",
  margin: "1em",
  fontSize: "1.5vw",
};

const NavBar = () => {
  return (
    <>
      <Typography>
        <Container maxWidth="xl" style={styleNavBar}>
          <NavLink to="/">
            <img
              src={logo}
              style={{ width: "15vw", height: "auto" }}
              alt="logo"
            />
          </NavLink>
          <NavLink
            exact
            to="/"
            activeStyle={linkSelected}
            style={linkStyled}
            className="linkClass"
          >
            Home
          </NavLink>
          <NavLink
            to="/Rockets"
            activeStyle={linkSelected}
            style={linkStyled}
            className="linkClass"
          >
            Rockets
          </NavLink>
          <NavLink
            to="/Launches"
            activeStyle={linkSelected}
            style={linkStyled}
            className="linkClass"
          >
            Launches
          </NavLink>
        </Container>
      </Typography>
    </>
  );
};

export default NavBar;
