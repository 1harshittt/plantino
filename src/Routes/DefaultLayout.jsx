import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Common/Header/Index";
import Footer from "../Shared/Common/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
