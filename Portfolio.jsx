import React, { useState } from "react";

// Web Css
import "../css/Archo.css";

// Page Css
import "../css/Portfolio.css";
import { BottomTop } from "../components/Pages/BottomTop";

export const Portfolio = () => {
  const categories = ["All", "Interior", "Theaters", "Residential"];

  const images = [
    { id: 1, src: "/images/portfolio-1.jpg", category: "Interior" },
    { id: 2, src: "/images/portfolio-2.jpg", category: "Interior" },
    { id: 3, src: "/images/ContactUs-Hero.jpg", category: "Residential" },
    { id: 4, src: "/images/Works (3).jpg", category: "Theaters" },
    { id: 5, src: "/images/Home-Hero(3).jpg", category: "Interior" },
    { id: 6, src: "/images/portfolio-3.jpg", category: "Interior" },
    { id: 7, src: "/images/portfolio-4.jpg", category: "Interior" },
    { id: 8, src: "/images/Works (1).jpg", category: "Residential" },
    { id: 9, src: "/images/Works (4).jpg", category: "Theaters" },
  ];

  // selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter images from selected category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <>
      <div className="Portfolio-Main">
        <div className="container">
          <div className="Portfolio-Hero">
            <div className="Portfolio-Hero-Sub">
              <h1>
                Architecture is a visual art, <br /> and the building speak for
                themeselves
              </h1>

              <span>
                Architecture bibendum pharetra eleifend. Suspendisse vel
                volutpat purus, sit amet bibendum nisl. Cras mollis <br />{" "}
                turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris
                vitae consequat nibh, vitae interdum mi.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Portfolio-Image-Gallery">
        <div className="container">
          <div className="Portfolio-Image-Gallery-Sub">
            {/* Filter Menu */}
            <div className="Filter-Menu">
              <ul>
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "active" : ""}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Images */}
            <div className="Portfolio-Images-Div">
              {filteredImages.map((image) => (
                <div className="Portfolio-Images" key={image.id}>
                  <img src={image.src} alt={image.id} />
                  <div className="Portfolio-Images-Text">
                    <span>Architecture Modern</span>
                    <p>Modern Townhouse</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* button */}

      <BottomTop />
    </>
  );
};
