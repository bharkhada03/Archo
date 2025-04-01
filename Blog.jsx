import React from "react";

import "../css/Archo.css";

import "../css/Blog.css";
import { BottomTop } from "../components/Pages/BottomTop";

export const Blog = () => {
  const blogData = [
    {
      imgSrc: "/images/portfolio-2.jpg",
      date: "06",
      monthYear: "Aug 2022",
      title: "Build a Beautiful Blog With Ease",
      description:
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    },
    {
      imgSrc: "/images/portfolio-3.jpg",
      date: "06",
      monthYear: "Aug 2022",
      title: "Build a Beautiful Blog With Ease",
      description:
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    },
    {
      imgSrc: "/images/portfolio-4.jpg",
      date: "06",
      monthYear: "Aug 2022",
      title: "Build a Beautiful Blog With Ease",
      description:
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    },
  ];

  return (
    <>
      <div className="Blog-Main">
        <div className="container">
          <div className="Blog-Hero">
            <img src="/images/ContactUs-Hero.jpg " alt="Blog Us" />
            <div className="Blog-Hero-Sub">
              <h1>Our Blogs</h1>
              <span>
                Home / <strong>Blogs</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Blog-Posts-Main">
        <div className="container">
          <div className="Blog-Posts-Sub">
            {blogData.map((post, index) => (
              <div key={index} className="Blog-Posts">
                <div className="Blog-Posts-Img">
                  <img src={post.imgSrc} alt="Archo" />
                </div>
                <div className="Blog-Posts-Text">
                  <div className="Blog-Posts-Text-Date">
                    <h1>{post.date}</h1>
                    <span>{post.monthYear}</span>
                  </div>
                  <div className="Blog-Posts-Text-Para">
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}

      <BottomTop />
    </>
  );
};
