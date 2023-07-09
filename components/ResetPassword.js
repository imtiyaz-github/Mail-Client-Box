import React, { useRef } from "react";
import classes from "./ResetPassword.module.css";

const ResetPassword = () => {
  const emailInputRef = useRef();

  const submitHandler = () => {
    const enteredEmail = emailInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCpdTE3APyjCDsyYS8h28hrwn80QQqoP68",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          requestType: "PASSWORD_RESET",
          headers: {
            "Content-type": "application-type",
          },
        }),
      }
    ).then((res) => {
      if (res.ok) {
        alert(" Reset Succuessfully ");
        console.log('reseting password');
        return res.json();
      } else {
        alert("Error Finding reset");
      }
    });
  };

  return (
    <section className={classes.reset}>
      <form onSubmit={submitHandler}>
        <h1>Reset a Password</h1>
        <div>
          <p>Enter the Email Which you have regestered before</p>
          <label htmlFor="">Email:</label>
          <input type="text" ref={emailInputRef} />
        </div>
        <button type="submit">Send a Link</button>
      </form>
    </section>
  );
};

export default ResetPassword;
