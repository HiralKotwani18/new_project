import React from "react";
import ReactDOM from "react-dom/client";
// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/DashBoard";
import Addmember from "./Addmember/Addmember";
//import Addbooks from "./Addbooks/Addbooks";
import Bookdetails from "./Booksdetails/Bookdetails";
import Users from "./Users/Users";
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
        <Route exact path="/Add_Member" element={<Addmember />}></Route>
        {/* <Route exact path="/Add_Books" element={<Addbooks />}></Route> */}
        <Route exact path="/Book_Details" element={<Bookdetails />}></Route>
        <Route exact path="/Users" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
