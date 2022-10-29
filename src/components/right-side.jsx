import React from "react";
import "./right-side.css";

const RightSide = () => {
  return (
    <div className="right-side-main-container">
      <div className="name-main">
        <label className="mallikarjun-kamtam">MALLIKARJUN KAMTAM</label>
        <div className="underline-mallikarjun"></div>
        <label className="full-stack-web-developer">
          Full stack web developer
        </label>
      </div>
      <div className="right-all-sections">
        <div className="right-section-1">
          <div className="">
            <label className="right-head">SUMMARY</label>
            <div className="right-head-underline"></div>
            <p className="plain-text">
              Experienced Software developer with expertise in UI design,
              creating REST API’s, testing and maintenance of software systems.
              Equipped with diverse and programming skill set. Proficient with
              different frameworks, cutting edge developing tools and
              procedures. Able to effectively manage during independent
              projects, as well as collaborate as a part of productive team.
            </p>
          </div>
        </div>{" "}
        <div className="right-section-2">
          <div className="experiance-overall-container">
            <label className="right-head">EXPERIENCE</label>
            <div className="right-head-underline"></div>
            <div>
              <div className="experiance-meta-data">
                <div>
                  <label className="company-name">Green Story</label>
                  <span className="office-location">(Bangalore)</span>
                </div>
                <label>Jun-2022 to Present</label>
              </div>
              <label className="company-role-text">Software Engineer</label>
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Building stable and maintainable codebase using Next JS,
                  Tailwind, SCSS, HTML in front end and Nest JS, PostgreSQL,
                  MongoDB at backend
                </p>
              </div>{" "}
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Collaborating with team mates to find the best solutions and
                  deliver good quality code by following agile methodology,
                  attending daily scrum meetings
                </p>
              </div>{" "}
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Performed bug fixes and code reviews
                </p>
              </div>{" "}
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Created custom and flexible common components from different
                  sources and created a collection in React Storybook.
                </p>
              </div>{" "}
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Had frequent discussions with Product owner, technical
                  managers, Co-founders of the organization to understand
                  business requirements and match the thought process of design.
                </p>
              </div>
            </div>
            <div>
              <div className="experiance-meta-data">
                <div>
                  <label className="company-name">
                    Tata Consultancy Services
                  </label>
                  <span className="office-location">(Gandhinagar, GJ)</span>
                </div>

                <label>Mar-2019 to Jun 2022</label>
              </div>
              <label className="company-role-text">
                Senior Process Associate
              </label>
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Developed commonly used components in the projects, made sure
                  to have them used in diverse places with more properties and
                  flexibility.
                </p>
              </div>
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Addressed and fixed complex bugs.
                </p>
              </div>
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Performed quality analysis of web applications with wide range
                  of techniques and methodologies
                </p>
              </div>
              <div className="each-point-container">
                <div className="points-dot"></div>
                <p className="plain-text expriance-points">
                  Received two awards as a recognition for dedicated hard work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section-1">
          <div className="">
            <label className="right-head">EDUCATION</label>
            <div className="right-head-underline"></div>
            <div className="college-heading">
              <label className="college-name">
                B.Tech in Electrical and Electronics Engineering
              </label>
              <label>Apr 2018</label>
            </div>
            <p className="plain-text">
              Vaageswari College of Engineering (JNTUH), Karimnagar
            </p>
          </div>
        </div>
        <div className="right-section-1">
          <div className="awards-section-container">
            <label className="right-head">AWARDS</label>
            <div className="right-head-underline"></div>
            <div style={{ fontWeight: "500" }} className="college-heading">
              <label className="college-name">
                <span className="award-highlight"> Service and Commitment</span>{" "}
                award received from TCS for dedicated service
              </label>
              <label>Mar 2022</label>
            </div>
            <div style={{ fontWeight: "500" }} className="college-heading">
              <label className="college-name">
                <span className="award-highlight"> On the Spot</span> (Team)
                award received from TCS
              </label>
              <label>Dec 2019</label>
            </div>
          </div>
        </div>
        <div className="right-section-1">
          <div className="">
            <label className="right-head">EXTRA CURRICULAR ACTIVITIES</label>
            <div className="right-head-underline"></div>
            <div style={{ fontWeight: "500" }} className="college-heading">
              <label className="college-name">
                Attended junior diploma in french language at Osmania University
                Hyderabad.
              </label>
              <label>Dec 2018</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
