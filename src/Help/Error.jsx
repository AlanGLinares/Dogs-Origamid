import React from "react";

const Error = ({ erro }) => {
  if (!erro) return null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{erro}</p>;
};

export default Error;
