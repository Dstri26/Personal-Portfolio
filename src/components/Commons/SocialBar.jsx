import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import './SocialBar.css'; // Create a corresponding CSS file for styling

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="https://www.linkedin.com/in/your-linkedin-profile">
        <FaLinkedin />
      </a>
      <a href="mailto:your-email@example.com">
        <FaEnvelope />
      </a>
      <a href="https://github.com/your-github-profile">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/your-instagram-profile">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialBar;
