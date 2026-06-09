import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const CustomButton = ({
  text,
  disabled = false,
  className,
  isLink,
  href,
  secondary,
}) => {
  const typeClass = secondary ? "secondary" : "primary";
  const disabledClass = disabled ? "disabled" : "";
  const customClass = className || "";

  if (!isLink)
    return (
      <button
        className={`custom-button ${typeClass} ${disabledClass} ${customClass}`}
        disabled={disabled}
      >
        <span>{text}</span>
        <div className="hover-bg"></div>
        <div className="border-top"></div>
        <div className="border-bottom"></div>
        <div className="border-left"></div>
        <div className="border-right"></div>
      </button>
    );

  const isExternal =
    href &&
    (href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:"));

  if (isExternal) {
    return (
      <a
        href={href}
        className={`custom-button ${disabledClass} ${customClass}`}
      >
        <span>{text}</span>
        <div className="hover-bg"></div>
        <div className="border-top"></div>
        <div className="border-bottom"></div>
        <div className="border-left"></div>
        <div className="border-right"></div>
      </a>
    );
  }

  return (
    <Link
      smooth
      to={href}
      className={`custom-button ${disabledClass} ${customClass}`}
      viewTransition
    >
      <span>{text}</span>
      <div className="hover-bg"></div>
      <div className="border-top"></div>
      <div className="border-bottom"></div>
      <div className="border-left"></div>
      <div className="border-right"></div>
    </Link>
  );
};

export default CustomButton;
