import './Form.css';
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        // Email sent successfully
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        // Error occurred while sending the email
        alert('An error occurred while sending the email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Subject</label>
        <input
          type='text'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Message</label>
        <textarea
          rows='6'
          placeholder='Type your message here'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className='btn'>Send</button>
      </form>
    </div>
  );
}

export default Form;
