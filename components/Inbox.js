import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Inbox = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);

  const email = userEmail.replace(/[@.]/g, "");
  const [mails, setEmails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await fetch(
          `https://mailboxdatabase-405d3-default-rtdb.firebaseio.com/inbox/${email}.json`
        );
        if (response.ok) {
          const data = await response.json();
          setEmails(data);
        } else {
          throw new Error("Something Went Wrong");
        }
      } catch (err) {
        alert("Something went Wrong");
      }
    };
    fetchMails();
  }, []);

  return (
    <Container>
      <h1>INBOX</h1>
      <ListGroup>
        {Object.keys(mails).map((key) => (
          <ListGroup.Item
            className="m-2"
            style={{
              backgroundColor: "#a563",
              border: "1px solid #ccc",
            }}
          >
            Hello World! This is a test message sent to you by the system.
            <br />
            {`${mails[key].from} -${mails[key].subject} -${mails[key].content} {" "}`}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Inbox;
