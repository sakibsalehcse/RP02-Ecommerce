import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Pages from "./Component/Pages";
import UserAccount from "./Component/UserAccount";
import VendorAccount from "./Component/VendorAccount";
import TrackMyOrder from "./Component/TrackMyOrder";
import Contact from "./Component/Contact";
import Header from "./Common/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/vendorAccount" element={<VendorAccount />} />
          <Route path="/trackmyorder" element={<TrackMyOrder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
