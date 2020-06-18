import React, { Component } from "react";
import { formatDateBr } from "../../utils";
import "./Contact.scss";

class Contact extends Component {
  render() {
    const { contact } = this.props;

    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={contact.avatar} alt={`${contact.name} avatar`} />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {contact.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {contact.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {contact.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {formatDateBr(contact.admissionDate)}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {contact.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {contact.department}
        </span>
      </article>
    );
  }
}

export default Contact;
