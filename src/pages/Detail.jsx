import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log("params", params);
  return <div>Detail 페이지입니다.</div>;
};

export default Detail;
