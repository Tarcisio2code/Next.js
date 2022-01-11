import classes from "./contact-form.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.controls}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.controls}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className={classes.controls}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5"></textarea>
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