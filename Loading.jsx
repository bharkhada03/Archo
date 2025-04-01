import React from "react";

import "../CSS/Loading.css";
export const Loading = () => {
  return (
    <>
      <div className="LoadingSpinner">
        <div className="HourGlass">
          <img src="/images/Hourglass.gif" alt="" />
        </div>
      </div>
    </>
  );
};
