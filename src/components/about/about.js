import React, { Component } from "react";
import resumeData from "../resumeData";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I went through school with a love for mathematics because of the
                challenges it presented to me, and what it taught me with
                regards to problem solving. With mathematics, I noticed in
                college that everything was a lot easier to learn and
                understand, so I decided to broaden my horizons and get involved
                with just about everything S.T.E.M. related my university had to
                offer. I took classes ranging from programming to organic
                chemistry and everything in between. Most of my academic career
                has been fueled by my curiosity and enjoyment in learning. My
                last job was as a middle school mathematics teacher. I would
                usually try to automate the menial parts of my job by making
                javascript applications and test templates using Latex. Menial
                parts being mass emails but tailored to different parents. I
                performed pretty well as a teacher, but I ultimately decided it
                was not the job for me. I felt like I was not being challenged
                enough. So given my interest in technology, I decided to immerse
                myself in learning javascript, React, Node.js, express, what it
                means to use a restful API and how to use/create one.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br />
                    <span>
                      520 Minola Drive
                      <br />
                      Miami Springs, FL 33166 US
                    </span>
                    <br />
                    <span>(786) 302-6099</span>
                    <br />
                    <span>anyone@website.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
