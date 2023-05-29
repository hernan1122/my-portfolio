import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import '../styles/Form.css'

export function Form() {
  const form = useRef();
  const { register, formState: { errors }, handleSubmit, reset } = useForm()

  const sendEmail = () => {
    emailjs.sendForm('service_hi4mvqe', 'template_n1bh8so', form.current, 'pvT5sYNTsZVPOqsxD')
      .then((result) => {
        console.log(result.text);
        reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='Form' ref={form} onSubmit={handleSubmit(sendEmail)}>
      <div className='Form-content'>
        <label>Name</label>
        <input
          className={`input ${errors.user_name?.type === 'required' ? 'error' : ''}`}
          type="text"
          name="user_name"
          {...register('user_name', { required: true })}
        />
        {errors.user_name?.type === 'required' && <p>Write your name</p>}
      </div>
      <div className='Form-content'>
        <label>Email</label>
        <input
          className={`input ${errors.user_email?.type === 'required' ? 'error' : ''}`}
          type="email"
          name="user_email"
          {...register('user_email', { required: true })}
        />
        {errors.user_email?.type === 'required' && <p>Write your email</p>}
      </div>
      <div className='Form-content'>
        <label>Message</label>
        <textarea
          className={`input-text ${errors.message?.type === 'required' ? 'error' : ''}`}
          name="message"
          {...register('message', { required: true })}
        />
        {errors.message?.type === 'required' && <p>You must write a message</p>}
      </div>
      <input className='Form-button' type="submit" value="Send" />
    </form>
  );
};
