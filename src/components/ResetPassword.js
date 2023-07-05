import React,{ useRef } from "react";




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
        return res.json();
      } else {
        alert("Error Finding reset");
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Reset a Password</h1>
      <label>Enter the Email Which you have regestered before</label>
      <input type="text" ref={emailInputRef} />
      <button type="submit">Send a Link</button>
    </form>
  );
};

export default ResetPassword;
