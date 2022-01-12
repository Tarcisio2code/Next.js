import { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [entredEmail, setEntredMail] = useState("");
  const [entredName, setEntredName] = useState("");
  const [entredMessage, setEntredMessage] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: entredEmail,
        name: entredName,
        message: entredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    </section>
  );
}

export default ContactForm;
