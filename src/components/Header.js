import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "./storeRedux/authentication";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Navbar bg="light" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="/" className="header-brand">
          <h1 className="header-title">Mail Client Box</h1>
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxlm5qIk-ZqPmBSHLtZdBMSDxMB0-sxgCkw&usqp=CAU"
              alt="mail-box"
              className="header-logo"
            />
          </span>
        </Navbar.Brand>
        <Nav className="header-nav">
          <Link to="/composemail" className="header-link">
            <h4>Compose Email</h4>
          </Link>

          <Link to="/inbox" className="header-link">
            <h4>Inbox</h4>
          </Link>

          <Link
            to="signup"
            className="header-link"
            onClick={logoutHandler}
            style={{
              marginLeft: "15rem",
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
