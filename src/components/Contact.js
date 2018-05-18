import React from "react";

const Contact = props => {
  return (
    <section id="contact" className="ium-contact">
      <form action="/my-handling-form-page">
        <h2>Contact</h2>
        <div>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" />
            <div>
              <label for="mail">E-mail:</label>
              <input type="email" id="mail" name="user_email" />
            </div>
            <div>
              <label for="mail">Subject:</label>
              <input type="email" id="mail" name="user_email" />
            </div>
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message" />
          </div>
          <button>Send</button>
        </div>
      </form>
      <nav>
        <h3>Follow us on Social Media!</h3>
        <svg width="50" height="50">
          <circle cx="25" cy="25" r="20" fill="yellow" />
        </svg>
        <svg width="50" height="50">
          <circle cx="25" cy="25" r="20" fill="yellow" />
        </svg>
        <svg width="50" height="50">
          <circle cx="25" cy="25" r="20" fill="yellow" />
        </svg>
      </nav>
    </section>
  );
};

export default Contact;
