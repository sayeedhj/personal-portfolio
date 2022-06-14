import React, { useContext, useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../context';


const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

    const handleSubmit = e =>{
        e.preventDefault()

        emailjs.sendForm('service_rfxjtzk', 'template_obmryuq', formRef.current, 'eqB8cbHLS9f4O43l1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src="https://pnggrid.com/wp-content/uploads/2021/12/Tel-Phone-Icon-PNG-Transparent-Background.png" alt="" className="contact-icon" />
              +88018 43939 341
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src="https://www.citypng.com/public/uploads/preview/hd-letter-email-round-blue-icon-transparent-png-11637141038bsz4tzs1ur.png" alt="" />
              sayeedhasanjisad@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src="https://www.clipartmax.com/png/middle/118-1182314_red-address-icon-red-png.png "alt="" />
              83 Hazi Abdullah Sarkar Lane, Bangshal, Dhaka
            </div>
          </div>
        </div>


        <div className="contact-right">
          <p className="contact-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me..!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Name" name="from_name" />
            <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"} }  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
    );
};

export default Contact;