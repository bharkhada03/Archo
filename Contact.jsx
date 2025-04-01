import React from "react";

// import { Link } from "react-router-dom";

// WEb Css
import "../css/Archo.css";

// Page Css
import "../css/Contact.css";

// React Icons
import { MdOutlinePhoneIphone } from "react-icons/md"; // Cell phone
import { HiOutlineMailOpen } from "react-icons/hi"; // Email
import { CiMap } from "react-icons/ci"; // Map
import { BottomTop } from "../components/Pages/BottomTop";

export const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <MdOutlinePhoneIphone className="contact-icon" />,
      title: "Call Us",
      details: ["+7 (111) 1234 56789", "+1 (000) 9876 54321"],
    },
    {
      id: 2,
      icon: <HiOutlineMailOpen className="contact-icon" />,
      title: "Email Us",
      details: ["contact@archo.com", "username@website.com"],
    },
    {
      id: 3,
      icon: <CiMap className="contact-icon" />,
      title: "Address",
      details: [
        "B17 Princess Road, London, Greater",
        "London NW18JR, United Kingdom",
      ],
    },
  ];

  return (
    <>
      <div className="Contact-Main">
        <div className="container">
          <div className="Contact-Hero">
            <img src="/images/ContactUs-Hero.jpg " alt="Contact Us" />
            <div className="Contact-Hero-Sub">
              <h1>Contact Us</h1>
              <span>
                Home / <strong>Contact Us</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Contact-info-main">
        <div className="container">
          <div className="Contact-info-sub">
            {contactDetails.map((item) => (
              <div className="Contact-flex" key={item.id}>
                {item.icon}
                <h1>{item.title}</h1>
                {item.details.map((detail, index) => (
                  <span key={index}>{detail}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Address-Main">
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14875.949534095074!2d72.8899716786315!3d21.232348884323507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5e3f2bb84d%3A0xf95fa453e0005985!2sSarthana%20Jakat%20Naka%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1735105404905!5m2!1sen!2sin"
            width="100%"
            height="550"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="Form">
          <form action="">
            <div className="Form-Full-name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="Form-Email">
              <input type="email" placeholder="Email" />
            </div>
            <div className="Form-Textarea">
              <textarea
                name="textarea"
                id="textarea"
                placeholder="Message "
              ></textarea>
            </div>
            <button className="Form-Btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* button */}

      <BottomTop />
    </>
  );
};
