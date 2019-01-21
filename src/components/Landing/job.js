import React from "react";
import { Link } from "react-router-dom";

// added some temporary fake data to fix styling (replace)

const Jobs = props => {
  return (
    <Link className="job-links" to="/">
      <div className="each-job">
        <div className="left-side">
          <h3 id="job-title">{props.job.title}</h3>
          <h3 className="spacing"> - </h3>
          <h3>{props.job.company_name} </h3>
          <h3 className="spacing"> - </h3>
          <h3>{props.job.salar}</h3>
        </div>
        <div className="right-side">
          <h3>{props.job.created_at}</h3>
        </div>
      </div>
      <div className="each-job">
        <div className="left-side">
          <h3 id="job-title">Transportation Security Officer</h3>
          <h3 className="spacing"> - </h3>
          <h3>U.S. Security Associates</h3> <h3 className="spacing"> - </h3>
          <h3>$60,000</h3>
        </div>
        <div className="right-side">
          <h3>1/13</h3>
        </div>
      </div>
      <div className="each-job">
        <div className="left-side">
          <h3 id="job-title">Senior Civil Structural Engineer</h3>
          <h3 className="spacing"> - </h3>
          <h3>Universal Pegasus International Enterprise</h3>{" "}
          <h3 className="spacing"> - </h3>
          <h3>$110,000</h3>
        </div>
        <div className="right-side">
          <h3>1/12</h3>
        </div>
      </div>
    </Link>
  );
};

export default Jobs;
