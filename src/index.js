
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Services from "components/PageHeader/Services";
import Internet from "components/servicepage/internet";
import Cyber from "components/servicepage/cyber";
import Data from "components/servicepage/data";
import Web from "components/servicepage/web";
import Management from "components/servicepage/management";
import Business from "components/servicepage/business";
import Pos from "components/huduma/business/Pos";
import Crm from "components/huduma/business/Crm";
import Ecommerce from "components/huduma/business/Ecommerce";
import Epr from "components/huduma/business/Epr";
import Payroll from "components/huduma/business/Payroll";
import Sacco from "components/huduma/business/Sacco";
import Bulksms from "components/huduma/cyber/Bulksms";
import Consultant from "components/huduma/cyber/Consultant";
import Documents from "components/huduma/cyber/Documents";
import Graphics from "components/huduma/cyber/Graphic";
import Project from "components/huduma/cyber/Projects";
import Tax from "components/huduma/cyber/Tax";
import Analysis from "components/huduma/data/Analysis";
import Entry from "components/huduma/data/Entry";
import DataManagement from "components/huduma/data/Management";
import Migration from "components/huduma/data/Migration";
import Recovery from "components/huduma/data/Recovery";
import Science from "components/huduma/data/Science";
import Biometric from "components/huduma/internet/Biometric";
import Seo from "components/huduma/internet/Seo";
import Network from "components/huduma/internet/Network";
import InternetServices from "components/huduma/internet/Internet";
import Cloud from "components/huduma/internet/Cloud";
import Hospital from "components/huduma/management/Hospital";
import School from "components/huduma/management/School";
import SupplyChain from "components/huduma/management/Supplychain";
import Hospitality from "components/huduma/management/Hospitality";
import Warehouse from "components/huduma/management/Warehouse";
import Ads from "components/huduma/web/Ads";
import Api from "components/huduma/web/Api";
import Dev from "components/huduma/web/Dev";
import Hosting from "components/huduma/web/Hosting";
import Testing from "components/huduma/web/Testing";
import Asset from "components/huduma/management/Asset";
import Cctv from "components/huduma/internet/Cctv";
import Websecurity from "components/huduma/web/Websecurity";
import Test from "components/test";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>

    <Test/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />

        <Route path="/services/business" element={<Business />} />
        <Route path="/services/management" element={<Management />} />
        <Route path="/services/web" element={<Web />} />
        <Route path="/services/data" element={<Data />} />
        <Route path="/services/internet" element={<Internet />} />
        <Route path="/services/cyber" element={<Cyber />} />

        <Route path="/services/business/POS" element={<Pos />} />
        <Route path="/services/business/CRM" element={<Crm />} />
        <Route path="/services/business/Ecommerce" element={<Ecommerce />} />
        <Route path="/services/business/EPR" element={<Epr />} />
        <Route path="/services/business/Payroll" element={<Payroll />} />
        <Route path="/services/business/Sacco" element={<Sacco />} />

        <Route path="/services/cyber/bulksms" element={<Bulksms />} />
        <Route path="/services/cyber/consultant" element={<Consultant />} />
        <Route path="/services/cyber/documents" element={<Documents />} />
        <Route path="/services/cyber/graphics" element={<Graphics />} />
        <Route path="/services/cyber/project" element={<Project />} />
        <Route path="/services/cyber/tax" element={<Tax />} />

        <Route path="/services/data/analysis" element={<Analysis />} />
        <Route path="/services/data/entry" element={<Entry />} />
        <Route path="/services/data/management" element={<DataManagement />} />
        <Route path="/services/data/migration" element={<Migration />} />
        <Route path="/services/data/recovery" element={<Recovery />} />
        <Route path="/services/data/science" element={<Science />} />

        <Route path="/services/internet/biometric" element={<Biometric />} />
        <Route path="/services/internet/CCTV" element={<Cctv />} />
        <Route path="/services/internet/Cloud" element={<Cloud />} />
        <Route path="/services/internet/internet" element={<InternetServices />} />
        <Route path="/services/internet/network" element={<Network />} />
        <Route path="/services/internet/seo" element={<Seo />} />

        <Route path="/services/management/Asset" element={<Asset />} />
        <Route path="/services/management/Hospital" element={<Hospital />} />
        <Route path="/services/management/School" element={<School />} />
        <Route path="/services/management/Supplychain" element={<SupplyChain />} />
        <Route path="/services/management/Hospitality" element={<Hospitality />} />
        <Route path="/services/management/Warehouse" element={<Warehouse />} />

        <Route path="/services/web/ads" element={<Ads />} />
        <Route path="/services/web/api" element={<Api />} />
        <Route path="/services/web/dev" element={<Dev />} />
        <Route path="/services/web/hosting" element={<Hosting />} />
        <Route path="/services/web/security" element={<Websecurity />} />
        <Route path="/services/web/testing" element={<Testing />} />

        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
