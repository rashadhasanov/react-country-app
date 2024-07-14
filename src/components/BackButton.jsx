import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-btn" onClick={handleClick}>
      <i className="fa-solid fa-arrow-left"></i>
      <span>Back</span>
    </button>
  );
};

export default BackButton;
