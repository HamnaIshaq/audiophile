import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import CompanyInfo from "../components/CompanyInfo";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <CompanyInfo />
      <Footer />
    </div>
  );
};

export default Root;
