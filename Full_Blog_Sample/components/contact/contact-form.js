import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [entredEmail, setEntredMail] = useState("");
  const [entredName, setEntredName] = useState("");
  const [entredMessage, setEntredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus == "error"){
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  },[requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      await sendContactData({
        email: entredEmail,
        name: entredName,
        message: entredMessage,
      });
      setRequestStatus("success")
      setEntredMessage("");
      setEntredMail("");
      setEntredName("");
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus("error")
    }
  }

  let notification;

  if (requestStatus === "pending" ){
    notification = {
      status: "pending",
      title: "Sending menssage...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success" ){
    notification = {
      status: "pending",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error" ){
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.controls}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={entredEmail}
              onChange={(event) => setEntredMail(event.target.value)}
            />
          </div>
          <div className={classes.controls}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={entredName}
              onChange={(event) => setEntredName(event.target.value)}
            />
          </div>
          <div className={classes.controls}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              required
              value={entredMessage}
              onChange={(event) => setEntredMessage(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification 
          status={notification.status} 
          title={notification.title} 
          message={notification.message} 
        />
      )}
    </section>
  );
}

export default ContactForm;
