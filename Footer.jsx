import React from "react";
// import { Link } from "react-router-dom";

//Web Css
import "../../css/Archo.css";

// Styling Css
import "../CSS/Footer.css";

//React Icon's
import { SlLocationPin } from "react-icons/sl"; // location Dot
import { TfiEmail } from "react-icons/tfi"; // Email
import { FiPhone } from "react-icons/fi"; // Phone
import { IoIosSend } from "react-icons/io"; //  Email Send Btn

//  Social Icons
import { FaFacebookF } from "react-icons/fa"; // Fb
import { FaTwitter } from "react-icons/fa"; // Twitter
import { FaInstagram } from "react-icons/fa"; // Instagram
import { FaYoutube } from "react-icons/fa6"; // Youtube

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container Footer">
          <div className="Footer-Contact">
            <h1>Contact Us</h1>
            <div className="Footer-Information">
              <div className="Footer-Information-Icon-Box">
                <SlLocationPin className="Footer-Information-Icon" />
              </div>
              <div className="Footer-Information-Text">
                <h3>Official Address</h3>
                <h2>504 White St . Dawsonville , GA 30534 , New York</h2>
              </div>
            </div>

            <div className="Footer-Information">
              <div className="Footer-Information-Icon-Box">
                <TfiEmail className="Footer-Information-Icon" />
              </div>
              <div className="Footer-Information-Text">
                <h3>Email Us</h3>
                <h2>support@gmail.com</h2>
              </div>
            </div>

            <div className="Footer-Information">
              <div className="Footer-Information-Icon-Box">
                <FiPhone className="Footer-Information-Icon" />
              </div>
              <div className="Footer-Information-Text">
                <h3>Call Us</h3>
                <h2>+8798765434</h2>
              </div>
            </div>
          </div>

          {/* Footer Recent News */}

          <div className="Footer-News">
            <h1>Recent News</h1>

            <div className="Footer-Information">
              <div className="Footer-Information-Icon-Box">
                <img src="/images/Orange sofa.jpg" alt="start up" />
              </div>
              <div className="Footer-Information-Text">
                <h4>
                  The Start-up Ultimate Guide to Make Your Wordpress Journal.
                </h4>
                <h5>14 Jan 2024</h5>
              </div>
            </div>

            <div className="Footer-Information">
              <div className="Footer-Information-Icon-Box">
                <img src="/images/Pink sofa.jpg" alt="start up" />
              </div>
              <div className="Footer-Information-Text">
                <h4>
                  The Start-up Ultimate Guide to Make Your Wordpress Journal.
                </h4>
                <h5>14 Jan 2024</h5>
              </div>
            </div>

            <div className="Type-Email">
              <div className="Email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Type Your Email"
                />
              </div>
              <div className="Email-Btn">
                <IoIosSend className="Email-Arrow" />
              </div>
            </div>
          </div>

          {/* Footer Archo Info */}

          <div className="Footer-Archo-Info">
            <h1>Archo</h1>
            <div className="Social-Icons-Box">
              <div className="Social-Icons">
                <FaFacebookF className="ICON" />
              </div>
              <div className="Social-Icons">
                <FaTwitter className="ICON" />
              </div>
              <div className="Social-Icons">
                <FaInstagram className="ICON" />
              </div>
              <div className="Social-Icons">
                <FaYoutube className="ICON" />
              </div>
            </div>

            <div className="Copy-Right">
              <h1>
                2022, ARCH TEMPLATE. MADE WITH PASSION BY
                <span style={{ color: "#c5a47e" }}>THEMESCAMP .</span>
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
