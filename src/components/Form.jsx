import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Form.css'

export function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hi4mvqe', 'template_n1bh8so', form.current, 'pvT5sYNTsZVPOqsxD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='Form' ref={form} onSubmit={sendEmail}>
      <div className='Form-content'>
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div className='Form-content'>
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div className='Form-content'>
        <label>Message</label>
        <textarea className='input-text' name="message" />
      </div>
      <input className='Form-button' type="submit" value="Send" />
    </form>
  );
};
