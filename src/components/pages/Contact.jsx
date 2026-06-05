import React, { useContext, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import CustomInput from '../CustomInput'
import { notifyError, notifySucess } from '../Toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader';
import { AppContext } from '../../context/Context';
import CustomButton from '../CustomButton';
import Menu from '../Menu';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import ScrollIndicator from '../ScrollIndicator';


const Contact = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()

  const form = useRef();
  const [disableButton, setDisableButton] = useState(true)
  const [emailContent, setEmailContent] = useState({
  })


  const handleInput = ({ target: { name, value } }) => {
    setEmailContent({
      ...emailContent,
      [name]: value,
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm('service_sjxa56i', 'template_x60jn1q', form.current, 'Pi9eFgBTZO2yV4WpF')
      notifySucess('Your email has been sent');
      setEmailContent({})
      // Also reset the DOM form so all inputs visually clear
      form.current.reset();
    } catch (error) {
      notifyError(error.text || error.message || 'An error occurred while sending the email')
    }
  };

  useEffect(() => {
    const { user_name, user_email, subject, message } = emailContent;
    
    // Email regex validation to verify basic mail structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = user_email && emailRegex.test(user_email.trim());
    
    const isValid = user_name?.trim() && isEmailValid && subject?.trim() && message?.trim();
    setDisableButton(!isValid);
  }, [emailContent])

  return (
    <>
      <Loader />
      <Menu/>
      <ToastContainer />
      <div className='h-100 row m-0'>
        <div className="vh-100 p-4 col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center aside-contact position-relative">
          <div className="col col-12 col-md-9 d-flex flex-column">
            <h1 className="display-1 fw-bold text-light mb-3">{generateLetters("Contact", false)}</h1>
            <p className='lead text-light fs-5 mb-4'>
            I'm currently looking for internship opportunities or exciting software engineering roles. If you have a project in mind, please send me a message using the form.
            </p>
            <div className="d-flex align-items-center gap-3 mb-4">
              <AiFillGithub color='#fff' size="2rem"/>
              <a href='https://github.com/marcos-css' target={'_blank'} rel='noreferrer' aria-label="Visit Marcos Casas on GitHub" className='text-light fs-5 m-0 text-decoration-none'>Github profile</a>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <AiFillLinkedin color='#fff' size="2rem"/>
              <a href='https://www.linkedin.com/in/marcos-casas/' target={'_blank'} rel='noreferrer' aria-label="Visit Marcos Casas on LinkedIn" className='text-light fs-5 m-0 text-decoration-none'>LinkedIn profile</a>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <AiOutlineMail color='#fff' size="2rem"/>
              <a href='mailto:marcos.csca@gmail.com' aria-label="Send an email to Marcos Casas" className='text-light fs-5 m-0 text-decoration-none'>marcos.csca@gmail.com</a>
            </div>
              <CustomButton isLink className="fs-5 d-lg-none text-center" href="#form-section" text={'Go to the form'}/>
            <div className="row">
            </div>
          </div>
          <ScrollIndicator text="Scroll to view form" />
        </div>
        <div id='form-section' className="col col-12 col-lg-6 p-4 pb-lg-0 d-flex justify-content-center flex-column overflow-scroll">
            <h2 className='text-light display-2 fw-bold mb-4 mt-4 mb-lg-0 p-0 ps-lg-5 pe-lg-5'>{generateLetters("Get in touch", false)}</h2>
          <form  className=' p-0 p-lg-5 ' ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-12 col-lg-6 mb-3 ">
                <CustomInput value={emailContent.user_name} type='text' name='user_name' placeholder='Name' autocomplete={'off'} handleInput={handleInput} />
              </div>
              <div className="col-12 col-lg-6 mb-3 ">
                <CustomInput value={emailContent.user_email} type='email' name='user_email' placeholder='Email' autocomplete={'off'} handleInput={handleInput} />
              </div>
            </div>
            <CustomInput className="mb-3 " value={emailContent.subject} type='text' name='subject' placeholder='Subject' handleInput={handleInput} />
            <CustomInput className="mb-3 " value={emailContent.message} isTextArea name='message' placeholder='Message' handleInput={handleInput} />

              <CustomButton className={'mb-3'} disabled={disableButton} text="Submit" />
          </form> 
        </div>

      </div>
    </>
  )
}


export default Contact