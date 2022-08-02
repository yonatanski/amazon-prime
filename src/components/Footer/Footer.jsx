import React from "react"
import footerlogo from "../../assests/logo/strivevideo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footerr">
        <div className="footer-logo">
          <img src={footerlogo} alt="footer logo" width={120} />
        </div>
        <div className="footer-text">
          <p>
            <span>Terms and Privacy Notice Send us feedback Help</span>
            <span> © 1996-2020, Amazon.com, Inc. or its affiliates</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
