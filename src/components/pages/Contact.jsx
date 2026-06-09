import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomInput from "../CustomInput";
import { notifyError, notifySucess } from "../Toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../context/Context";
import CustomButton from "../CustomButton";
import Menu from "../Menu";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import ScrollIndicator from "../ScrollIndicator";
import { GlitterFinal } from "../animated-hero-with-web-gl-glitter";

const Contact = () => {
  const { generateLetters, AnimateLetters } = useContext(AppContext);
  AnimateLetters();

  const form = useRef();
  const [disableButton, setDisableButton] = useState(true);
  const [emailContent, setEmailContent] = useState({});

  const handleInput = ({ target: { name, value } }) => {
    setEmailContent({
      ...emailContent,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_sjxa56i",
        "template_x60jn1q",
        form.current,
        "Pi9eFgBTZO2yV4WpF",
      );
      notifySucess("Your email has been sent");
      setEmailContent({});
      // Also reset the DOM form so all inputs visually clear
      form.current.reset();
    } catch (error) {
      notifyError(
        error.text ||
          error.message ||
          "An error occurred while sending the email",
      );
    }
  };

  useEffect(() => {
    const { user_name, user_email, subject, message } = emailContent;

    // Email regex validation to verify basic mail structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = user_email && emailRegex.test(user_email.trim());

    const isValid =
      user_name?.trim() && isEmailValid && subject?.trim() && message?.trim();
    setDisableButton(!isValid);
  }, [emailContent]);

  return (
    <>
      <Menu />
      <ToastContainer />
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-dvh p-8 lg:p-16 flex flex-col justify-center items-center lg:items-start aside-contact relative">
          <div className="w-full lg:w-3/4 flex flex-col">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              {generateLetters("Contact", false)}
            </h1>
            <p className="lead text-white text-lg mb-4">
              I'm currently looking for internship opportunities or exciting
              software engineering roles. If you have a project in mind, please
              send me a message using the form.
            </p>
            <div className="flex items-center gap-3 mb-4 social-link">
              <AiFillGithub color="#fff" size="2rem" />
              <a
                href="https://github.com/marcos-css"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Visit Marcos Casas on GitHub"
                className="text-white text-lg"
              >
                Github profile
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4 social-link w-fit">
              <AiFillLinkedin color="#fff" size="2rem" />
              <a
                href="https://www.linkedin.com/in/marcos-casas/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="Visit Marcos Casas on LinkedIn"
                className="text-white text-lg"
              >
                LinkedIn profile
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4 social-link w-fit">
              <AiOutlineMail color="#fff" size="2rem" />
              <a
                href="mailto:marcos.csca@gmail.com"
                aria-label="Send an email to Marcos Casas"
                className="text-white text-lg"
              >
                marcos.csca@gmail.com
              </a>
            </div>
            <div className="lg:hidden mt-4">
              <CustomButton isLink href="#form-section" text={"Go to the form"} />
            </div>
          </div>
          <div className="lg:hidden">
            <ScrollIndicator text="Scroll to view form" />
          </div>
        </div>

        <div
          id="form-section"
          className="w-full min-h-dvh p-8 lg:p-16 flex justify-center flex-col overflow-y-auto"
        >
          <div className="w-full lg:w-4/5 mx-auto">
            <h2 className="text-white text-5xl lg:text-7xl font-bold mb-8">
              {generateLetters("Get in touch", false)}
            </h2>
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col lg:flex-row lg:gap-4">
              <div className="w-full mb-3">
                <CustomInput
                  value={emailContent.user_name}
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  autocomplete={"off"}
                  handleInput={handleInput}
                />
              </div>
              <div className="w-full mb-3">
                <CustomInput
                  value={emailContent.user_email}
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  autocomplete={"off"}
                  handleInput={handleInput}
                />
              </div>
            </div>
            <CustomInput
              className="mb-3 "
              value={emailContent.subject}
              type="text"
              name="subject"
              placeholder="Subject"
              handleInput={handleInput}
            />
            <CustomInput
              className="mb-3 "
              value={emailContent.message}
              isTextArea
              name="message"
              placeholder="Message"
              handleInput={handleInput}
            />

              <CustomButton
                className={"mb-3"}
                disabled={disableButton}
                text="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
