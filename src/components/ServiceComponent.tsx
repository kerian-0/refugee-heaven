import {  BiHeart, BiHome } from "react-icons/bi";
import {BsBagDash } from "react-icons/bs";

export default function ServiceComponent() {
  return (
    <>
    <h3 className="font-bold text-info ms-50 py-3">Our Services</h3>
      <div className="stats shadow ms-50">
        <div className="stat place-items-center">
          <div className="stat-title"><BiHome size={30}/></div>
          <div className="stat-value">Housing Assistance</div>
          <div className="stat-desc">Find Safe And Affordable Housing Option</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title"><BsBagDash size={30}/></div>
          <div className="stat-value text-secondary">Employeement Support</div>
          <div className="stat-desc text-secondary">Connect With Employee And Job Oppotunities</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title"><BiHeart size={30}/></div>
          <div className="stat-value">Health-care Access</div>
          <div className="stat-desc">Access Medical Service And HealthCare Infomation</div>
        </div>
      </div>
    </>
  );
}
