import React from "react";

export default function StatisticsComponent() {
  return (
    <>
      <h3 className="font-bold text-info ms-70 py-3">Key Statistics</h3>
      <div className="stats w-[1000px] shadow ms-70 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="stat place-items-center inline-block">
          <div className="stat-title font-bold">Refugee Assisted</div>
          <div className="stat-value">5,000</div>
          <div className="stat-desc">Jan 1st - Today</div>
        </div>

        <div className="stat place-items-center inline-block">
          <div className="stat-title font-bold">Job Secured</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat place-items-center inline-block">
          <div className="stat-title font-bold">Healthcare Connection</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </>
  );
}
