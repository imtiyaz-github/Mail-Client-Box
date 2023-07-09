import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "./storeRedux/authentication";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <h1 className="m-0">Mail Client Box</h1>
        </Navbar.Brand>
        <span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxlm5qIk-ZqPmBSHLtZdBMSDxMB0-sxgCkw&usqp=CAU"
            alt="mail-box"
            className="header-logo"
          />
        </span>
        <Nav className="me-auto">
          <Link to="/composemail" className="nav-link">
            <h4>Compose Email</h4>
          </Link>

          <Link
            to="signup"
            className="nav-link"
            onClick={logoutHandler}
            style={{
              display: "flex",
              justifyContent: "end",
              marginLeft: "30px",
            }}
          >
            <h4>Logout</h4>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
