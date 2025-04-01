import React, { useEffect, useState } from "react";

// Page Css
import "../css/Home.css";

// All css
import "../css/Archo.css";

// AOS ( Animation On Scroll )
import Aos from "aos";
import "aos/dist/aos.css";

// React icons

import { SlNote } from "react-icons/sl"; // Design & planning - ( Services )
import { LuSofa } from "react-icons/lu"; // Furniture & Decor - ( Services )
import { MdOutlineMapsHomeWork } from "react-icons/md"; // External Design ( Services )
import { CiPlay1 } from "react-icons/ci"; // Works Play video - ( Works. )
import { FaArrowUp } from "react-icons/fa";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      icon: <SlNote className="Services-Icons" />,
      title: "Design & Planning",
      description:
        "At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesnti um voluptatum deleniti",
    },
    {
      id: 2,
      icon: <LuSofa className="Services-Icons" />,
      title: "Furniture & Decor",
      description:
        "At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesnti um voluptatum deleniti",
    },
    {
      id: 3,
      icon: <MdOutlineMapsHomeWork className="Services-Icons" />,
      title: "Exterior Design",
      description:
        "At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesnti um voluptatum deleniti",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Ryan Hicks",
      role: "Client Manager",
      image: "/images/Ryan Hicks.jpg",
    },
    {
      id: 2,
      name: "Andrew",
      role: "Client Manager",
      image: "/images/Andrew.jpg",
    },
    {
      id: 3,
      name: "Antonio",
      role: "Client Manager",
      image: "/images/Antonio.jpg",
    },
    {
      id: 4,
      name: "Marco",
      role: "Client Manager",
      image: "/images/Marco.jpg",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      once: true,
    });

    // Scroll event to handle visibility of the button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <>
      <div className="Hero-Main">
        <img src="/images/Home-Hero(2).jpg" alt="Hero-Img(1)" />
        <div className="container">
          <div className="Hero-Sub">
            <h2>INNOVATIVE</h2>
            <h1>INTERIOR DESIGN</h1>
            <p>
              Right design and right ideas matter a lot ininterior design
              bussiness. A style that makes a statement .
            </p>
            <button>Discover Work</button>
          </div>
        </div>
      </div>

      {/* AboutUs Section */}

      <div className="AboutUs-Main">
        <div className="container">
          <div className="AboutUs-Sub">
            <div className="AboutUs-Text">
              <h2>About us</h2>
              <h1>Our Company</h1>

              <div className="Decorative-Div">
                <img src="/images/white dot(2).avif" alt="" />
                <div className="Decorative-Text-Div">
                  <h1>25 years of Experience</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam
                  </p>
                </div>
              </div>
            </div>

            <div className="AboutUs-Image">
              <div className="img-About">
                <img src="/images/About us (1).jpg" alt="" />
              </div>
              <div className="count-About">
                <div className="counts">
                  <h1>01</h1>
                  <span>Architecture</span>
                </div>
                <div className="counts">
                  <h1>02</h1>
                  <span>Interior Design</span>
                </div>
                <div className="counts">
                  <h1>03</h1>
                  <span>Modeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}

      <div className="Services-Main">
        <div className="container">
          <div className="Services-Sub">
            <h1>Services</h1>
            <div className="Services-Flexs">
              {services.map((service) => (
                <div className="Services-names" key={service.id}>
                  {service.icon}
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work Section */}

      <div className="Works-Main">
        <div className="container">
          <div className="Works-Sub">
            <h1>Works.</h1>
            <div className="Works-Flexs">
              <div className="Works-Flexs-One">
                <div className="Works-One" data-aos="fade-up">
                  <img src="/images/Works (1).jpg" alt="Work(1)" />
                  <div className="Works-One-Text">
                    <span>Architecture Modern</span>
                    <p>Modern Townhouse</p>
                  </div>
                </div>

                <div className="Works-Two" data-aos="fade-up">
                  <img src="/images/Works (5).jpg" alt="Work(2)" />
                  <div className="Works-Two-Text">
                    <span>Architecture Modern</span>
                    <p>Modern Townhouse</p>
                  </div>
                </div>
              </div>

              <div className="Works-Flexs-Two" data-aos="fade-up">
                <div className="Works-Three">
                  <img src="/images/Works (2).jpg" alt="Work(1)" />
                  <div className="Works-Three-Text">
                    <span>Architecture Modern</span>
                    <p>Modern Townhouse</p>
                  </div>
                </div>

                <div className="Works-One" data-aos="fade-up">
                  <img src="/images/Works (3).jpg" alt="Work(1)" />
                  <div className="Works-One-Text">
                    <span>Architecture Modern</span>
                    <p>Modern Townhouse</p>
                  </div>
                </div>

                <div className="Works-One" data-aos="fade-up">
                  <img src="/images/Works (4).jpg" alt="Work(1)" />
                  <div className="Works-One-Text">
                    <span>Architecture Modern</span>
                    <p>Modern Townhouse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Work-Video">
        <img src="/images/House bg video.jpg" alt="Home" />

        <div className="Work-Video-Text">
          <div className="Play-Btn">
            <CiPlay1 className="Play-Icon" />
          </div>

          <div className="clients">
            <h1>
              3<span>K</span>+
            </h1>
            <p>Happy Clients</p>
          </div>

          <div className="projects">
            <h1>
              14<span>K</span>+
            </h1>
            <p>Success Projects</p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}

      <div className="Our-Team-Main">
        <div className="container">
          <div className="Our-Team-Sub">
            <h1>Our Team</h1>
            <div className="Our-Team-Flexs">
              {teamMembers.map((member) => (
                <div
                  className="Our-Team-Member"
                  key={member.id}
                  data-aos="fade-up"
                >
                  <img src={member.image} alt={member.name} />
                  <div className="Our-Team-Member-Sub">
                    <h1>{member.name}</h1>
                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};
