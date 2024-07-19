import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>About Pag ge</h1>
      <p>This is the about page of the application.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default About;
