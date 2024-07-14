import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Display = () => {
  const location = useLocation();
  const { fullName } = location.state || {};
  console.log("fullname:", fullName);
  return (
    <div>
      <h1>Welcome, {fullName}</h1>
    </div>
  );
};

export default Display;
