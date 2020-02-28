import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Code Blog</h4>
    <p className="text-center">Follow me on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://twitter.com/JayLowellC"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jameslcarterdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jlowellc"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/jimcarterdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookSquare />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
