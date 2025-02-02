import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nagative = useNavigate();
  return (
    <div>
      <h1>Home 페이지입니다.</h1>
      <Link to="/detail">detail 페이지로 이동</Link>
    </div>
  );
};

export default Home;
