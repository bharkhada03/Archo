import React from "react";

// Using For Dynamic Webpages
import { Outlet } from "react-router-dom";

//Header & Footer Pages
import { Header } from "../Pages/Header";
import { Footer } from "../Pages/Footer";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
