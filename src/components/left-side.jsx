import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import "./left-side.css";

const LeftSection = () => {
  return (
    <>
      <div className="overall-container">
        <div className="left-main">
          <div className="left-section-1">
            <img
              className="profile-pic"
              src={require("../source/phto.jpg")}
              alt=""
            />
          </div>
          <div className="left-section-2">
            <div className="contact-container">
              {" "}
              <div>
                <label className="contact-head">CONTACT</label>
              </div>
              <div className="container-box-left-side">
                <div className="contact-child-container">
                  <FaPhone />{" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    className="contact-link-href"
                    href="tel:+919550660375"
                  >
                    <label
                      style={{ cursor: "pointer" }}
                      className="contact-child-label"
                    >
                      +91 9550660375
                    </label>
                  </a>
                </div>
                <div className="contact-child-container">
                  <FaEnvelope />
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    className="contact-link-href"
                    href="mailto:mallikarjunkamtam@gmail.com"
                  >
                    <label
                      style={{ cursor: "pointer" }}
                      className="contact-child-label"
                    >
                      mallikarjunkamtam@gmail.com
                    </label>
                  </a>
                </div>

                <div className="contact-child-container">
                  <FaLinkedin />
                  <a
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    className="contact-link-href"
                    href="https://www.linkedin.com/in/mallikarjunkamtam/"
                  >
                    <label
                      style={{ cursor: "pointer" }}
                      className="contact-child-label"
                    >
                      linkedin.com/in/mallikarjunkamtam
                    </label>
                  </a>
                </div>
                <div className="contact-child-container">
                  <FaLocationArrow />
                  <a
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    className="contact-link-href"
                    href="https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4121531,78.1278513,10z/data=!3m1!4b1!4m5!3m4!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671"
                  >
                    <label
                      style={{ cursor: "pointer" }}
                      className="contact-child-label"
                    >
                      Hyderabad, Telangana
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="left-section-3">
            <div>
              <label className="contact-head">SKILLS</label>

              <div className="skill-overall-container">
                <div className="skills-grid-container">
                  <label className="skill-child-label">React JS</label>
                  <label className="skill-child-label">Next JS</label>
                  <label className="skill-child-label">JavaScript</label>
                  <label className="skill-child-label">TypeScript</label>
                  <label className="skill-child-label">Redux</label>
                  <label className="skill-child-label">Tailwind</label>
                  <label className="skill-child-label">Bootstrap</label>
                  <label className="skill-child-label">HTML 5</label>
                  <label className="skill-child-label">CSS</label>
                  <label className="skill-child-label">Jest, RTL</label>
                </div>
              </div>
            </div>
            {/* <div className="skill-overall-container">
              <div className="skills-grid-container">
                <label className="skill-child-label">Node JS</label>
                <label className="skill-child-label">Nest JS</label>
                <label className="skill-child-label">Express JS</label>
                <label className="skill-child-label">Mongo DB</label>
                <label className="skill-child-label">PostgreSQL</label>
              </div>
            </div> */}
            <div className="skill-overall-container other">
              <div className="skills-grid-container">
                <label className="skill-child-label">GIT</label>
                <label className="skill-child-label">Adobe Photoshop</label>
              </div>
            </div>
          </div>
          <div className="left-section-4">
            <label className="contact-head">LANGUAGES</label>

            <div className="languages-container container-box-left-side">
              <div className="each-language-container">
                <label className="font-12px">English</label>
                <div className="language-bar">
                  <div className=" language-bar-eng"></div>
                </div>
              </div>
              <div className="each-language-container">
                <label className="font-12px">Hindi</label>
                <div className="language-bar">
                  <div className=" language-bar-hin"></div>
                </div>
              </div>
              <div className="each-language-container">
                <label className="font-12px">Telugu</label>
                <div className="language-bar">
                  <div className=" language-bar-tel"></div>
                </div>
              </div>
              <div className="each-language-container">
                <label className="font-12px">French</label>
                <div className="language-bar">
                  <div className=" language-bar-fr"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-section-5">
            <label className="contact-head ">HOBBIES</label>
            <div className="hobbies-container container-box-left-side">
              <label className="font-12px">Watching movies</label>
              <label className="font-12px">Playing video games</label>
              <label className="font-12px">Traveling</label>
              <label className="font-12px">Codewars, Leetcode</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
