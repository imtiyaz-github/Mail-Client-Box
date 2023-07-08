import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./storeRedux/authentication";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "2rem",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Mail Client Box by Imtiyaz Shirasangi
          </h1>
        </Navbar.Brand>

        <Nav className="me-auto m-6">
          {!isLoggedIn && (
            <Link
              to="/signup"
              style={{
                color: "Highlight",
                fontSize: "1.4rem",
                marginLeft: "7rem",
              }}
            >
              Login
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/composeemail"
              className="text-light text-decoration-none m-2"
            >
              Compose Email
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="signup"
              className="text-light text-decoration-none m-2"
              onClick={logoutHandler}
            >
              Logout
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
