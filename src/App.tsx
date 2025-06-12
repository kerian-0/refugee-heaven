import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ServiceNavComponent from "./components/ServiceNavComponent";
import ContactComponent from "./components/ContactComponent";
import AboutComponent from "./components/AboutComponent";
import LoginComponent from "./components/LoginComponent";
import RefugeesComponent from "./components/RefugeesComponent";
import CampComponent from "./components/CampComponent";
import RefugeeNewFormComponent from "./components/RefugeeNewFormComponent";
import NewCampComponent from "./components/NewCampComponent";
import DashboardComponent from "./components/DashboardComponent";
import DashboardHomeComponent from "./components/DashboardHomeComponent";
import CampOverview from "./components/CampOverViewComponent";
import RefugeeViewComponent from "./components/RefugeeViewComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        

        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/service" element={<ServiceNavComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/login" element={<LoginComponent />} />

          <Route path="/refugees" element={<RefugeesComponent />} />

          <Route path="/camps" element={<CampComponent />} >
             
          </Route>
          <Route path="/camp-overview/:id" element={<CampOverview/>}/>
          <Route path="/ref-overview/:id" element={<RefugeeViewComponent/>}/>
          <Route path="/new-refugee" element={<RefugeeNewFormComponent />} />
          
         
          <Route path="/dashboard" element={<DashboardComponent />} >
              <Route path="" element={<DashboardHomeComponent/>}/>
              <Route path="new-camps" element={<NewCampComponent />} />
              <Route path="new-ref" element={<RefugeeNewFormComponent />} />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}
