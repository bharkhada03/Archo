import React from "react";
import { Link } from "react-router-dom";

// Web Css

import "../css/Archo.css";

// Page Css

import "../css/About.css";

// React Icon
import { IoHomeOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { AiOutlineQrcode } from "react-icons/ai";

// Button
import { BottomTop } from "../components/Pages/BottomTop";

export const About = () => {
  const details = [
    { id: 1, value: "352", description: "projects completed" },
    { id: 2, value: "567", description: "satisfied clients" },
    { id: 3, value: "656 M", description: "monthly revenue" },
    { id: 4, value: "17", description: "awards won" },
  ];

  const features = [
    {
      id: 1,
      imgSrc: "/images/Works (3).jpg",
      altText: "Architecture",
      icon: <IoHomeOutline className="IcoN" />,
      title: "Architecture",
      description:
        "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
    },
    {
      id: 2,
      imgSrc: "/images/Orange sofa.jpg",
      altText: "Interior Design",
      icon: <LuSofa className="IcoN" />,
      title: "Interior Design",
      description:
        "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
    },
    {
      id: 3,
      imgSrc: "/images/3d-model.jpg",
      altText: "3D Modeling",
      icon: <AiOutlineQrcode className="IcoN" />,
      title: "3D Modeling",
      description:
        "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Hasib Sharif",
      role: "( General Manager )",
      image: "/images/Hasib Sharif.jpg",
      alt: "Hasib Sharif ( G.M )",
    },
    {
      id: 2,
      name: "Johnson Leo",
      role: "( Founder )",
      image: "/images/johnson Leo ( 2 ).avif",
      alt: "johnson Leo",
    },
    {
      id: 3,
      name: "Leio Man",
      role: "( Founder )",
      image: "/images/leio man.avif",
      alt: "Leio Man",
    },
    {
      id: 4,
      name: "Robert Front",
      role: "( CEO Founder)",
      image: "/images/Robert Front.avif",
      alt: "Robert Front",
    },
  ];

  const progressData = [
    { label: "Architecture", percentage: 90 },
    { label: "Interior Design", percentage: 75 },
    { label: "3D Modeling", percentage: 80 },
  ];

  return (
    <>
      <div className="AboutUs-main">
        <div className="container">
          <div className="AboutUs-Hero">
            <img src="/images/AboutUs-Hero.jpg" alt="Hero" />
            <div className="AboutUs-Hero-Sub">
              <h1>About Us</h1>
              <span>
                Home / <strong>About Us</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Company Detail */}

      <div className="Company-Detail-Main">
        <div className="container">
          <div className="Company-Detail-Sub">
            <div className="Company-Detail-Sub-One">
              {details.map((detail) => (
                <div className="All-Company-Detail" key={detail.id}>
                  <h1>{detail.value}</h1>
                  <span>{detail.description}</span>
                </div>
              ))}
            </div>

            <div className="Company-Detail-Sub-Two">
              <span>
                Maecenas imperdiet ante eget hendrerit posuere. Nunc urna
                libero, congue porta nibh a, semper feugiat sem. Sed auctor dui
                eleifend, scelerisque eros ut.
              </span>

              <p>
                Curabitur sed iaculis dolor, non congue ligula. Maecenas
                imperdiet ante eget hendrerit posuere. Nunc urna libero, congue
                porta nibh a, semper feugiat sem. Sed auctor dui eleifend,
                scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit
                accumsan. Donec sodales, neque vitae rutrum convallis, nulla
                tortor pharetra odio, in varius ante ante sed nisi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}

      <div className="Best-Features-Main">
        <div className="container">
          <div className="Best-Features-Sub">
            <div className="Best-Features-Sub-Header">
              <h1>Services</h1>
              <h2>Best Features</h2>
            </div>

            <div className="Best-Features-Sub-Flexs">
              {features.map((feature) => (
                <div className="Best-Features-Sub-Flex" key={feature.id}>
                  <img src={feature.imgSrc} alt={feature.altText} />
                  <div className="Best-Features-Sub-Flex-Text">
                    {feature.icon}
                    <h1>{feature.title}</h1>
                    <p>{feature.description}</p>
                    <Link className="Link" to="/details">
                      Read more..
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Creative Team */}

      <div className="Creative-Team-Main">
        <div className="container">
          <div className="Creative-Team-Sub">
            <div className="Creative-Team-Sub-Header">
              <h1>Team</h1>
              <h2>Creative Team.</h2>
            </div>

            <div className="Creative-Team-Sub-Flexs">
              {teamMembers.map((member) => (
                <div className="Creative-Team-Sub-Member" key={member.id}>
                  <div className="MEMBER">
                    <img src={member.image} alt={member.alt} />
                  </div>
                  <h1>{member.name}</h1>
                  <span>{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar  */}

      <div className="ProgressBar-Main">
        <div className="container">
          <div className="ProgressBar-Content">
            {/* Left Progress Bars */}
            <div className="ProgressBar-Left">
              {progressData.map((item, index) => (
                <div key={index} className="ProgressBar-Item">
                  <span className="ProgressBar-Label">{item.label}</span>
                  <div className="ProgressBar">
                    <div
                      className="ProgressBar-Fill"
                      style={{ width: `${item.percentage}%` }}
                    >
                      <span className="ProgressBar-Percentage">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div className="ProgressBar-Right">
              <h1>
                Providing Customized Design Solutions That Fit Every Space
              </h1>
              <p>
                Beyond more stoic this along goodness hey this the wow ipsum
                manate far impressive manifest farcrud opened inside.
              </p>
              <p>
                Fustered impressive manifest crud opened inside owing punitively
                around forewent and after wasteful telling sprang coldly and
                spoke less clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom to Top */}
      <BottomTop />
    </>
  );
};
