import React, { useState } from "react";
import "../features/Features.css";

const Features = () => {
  // const [feature, setFeature] = useState("1");
  return (
    <>
      <div id="feature_page" className="features">
        <h1>Standout Features of Our Resume Builder</h1>
        <div className="feature-explanation">
          <div className="feature-text">
            <div className="cards">
              <h2>Professional Templates</h2>

              <p>
                Select from a variety of templates tailored to IT industries and
                job roles.
              </p>
            </div>
            <div className="cards">
            <h2>Dynamic Editing</h2>

            <p>
              Easily add, edit, or remove sections like skills, education, and
              experience to personalize your resume.
            </p>
            </div>
            <div className="cards">
            <h2>Real-Time Preview</h2>

            <p>
              Instantly see updates as you create your resume, ensuring every
              detail looks perfect.
            </p>
            </div>
            <div className="cards">
            <h2>Responsive Design</h2>

            <p>
              Build and edit resumes seamlessly across devices—desktop, tablet,
              or mobile.
            </p>
            </div>
            <div className="cards">
            <h2>Easy Download Options</h2>

            <p>
              Download your polished resume in PDF format for quick sharing with
              recruiters.
            </p>
            </div>
            <div className="cards">
            <h2>ATS-Friendly Design</h2>

            <p>
            Our templates are designed to pass Applicant Tracking Systems,ensuring your resume gets noticed by recruiters. 
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
