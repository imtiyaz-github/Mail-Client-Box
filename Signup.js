import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./Signup.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./storeRedux/authentication";

const SignUp = () => {
  const histroy = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const swithAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const resetPasswordHandler = () => {
    histroy.push("/resetpassword");
    console.log("Forgetted password");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredconfirmPassword = confirmpasswordInputRef.current.value;

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpdTE3APyjCDsyYS8h28hrwn80QQqoP68";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpdTE3APyjCDsyYS8h28hrwn80QQqoP68";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        confirmpassword: enteredconfirmPassword,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => {
      if (data.ok) {
        dispatch(authActions.login({ token: data.idToken, email: data.email }))
        console.log('Successfully login');
        histroy.replace("/header")
      } else {
        alert("Error Message");
      }
    });
  };

  return (
    <section className={classes.head}>
      <form action="" onSubmit={submitHandler}>
        <h1>{!isLogin ? "Login" : "Sign Up"}</h1>
        <div className={classes.div1}>
          <label htmlFor="email">Enter Your Email</label>
          <input type="text" id="name" ref={emailInputRef} />
        </div>
        <div className={classes.div1}>
          <label htmlFor="password">Enter Your Password</label>
          <input type="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.div1}>
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" required ref={confirmpasswordInputRef} />
        </div>
        <div className={classes.actions}>
          {isLogin && (
            <button type="submit" onClick={resetPasswordHandler}>
              Forget password
            </button>
          )}
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button className={classes.button}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={swithAuthHandler}
          >
            {isLogin ? "Create New Account " : "Login with Existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
