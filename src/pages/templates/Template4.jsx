import React from "react";
import "../templates_css/Template4.css";

function Template4({ value }) {
  return (
    <>
      <div className="a4size template4" id="template4">
        <div className="temp4-personal_details">
          <div className="temp4-contact">
            <ul>
              <li>
                <i class="fi fi-tr-mobile-button "> </i> {value.contact}
              </li>
              <li>
                <i class="fi fi-rr-envelope"> </i> {value.email}
              </li>
              <li>
                <i class="fi fi-ss-marker"> </i>
                {value.address}
              </li>
              <li>
                <i class="fi fi-brands-linkedin"> </i>
                {value.linkedin}
              </li>
            </ul>
          </div>
          <div className="temp4-name">
            <h1>
              {value.fname} {value.lname}
            </h1>
            <h2>{value.profession}</h2>
          </div>
        </div>
        <div className="temp4-obj">
          <p>{value.objective}</p>
        </div>
        {/* <br /> */}
        <div className="temp4-heading">
          <h3>EDUCATION</h3>
          <div className="temp4-details">
            {value.education.map((items) => {
              return (
                <>
                  <h4>
                    {items.degree},{items.year}
                  </h4>
                  <p>
                    {items.college},{items.university}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="temp4-heading">
          <h3>EXPERIENCE</h3>
          <div className="temp4-details">
            {value.experience.map((items) => {
              return (
                <>
                  <h4>
                    {items.jobprofile} , ({items.from}-{items.to})
                  </h4>
                  <h5>
                    {items.company},{items.city}
                  </h5>
                  <p>{items.description}</p>
                </>
              );
            })}
          </div>
        </div>
        <div className="temp4-heading">
          <h3>PROJECT</h3>
          <div className="temp4-details">
            {value.project.map((items) => {
              return (
                <>
                  <h4>{items.pname}</h4>
                  <h5>Technologies used:{items.ptech}</h5>
                  <p>{items.pdesc}</p>
                </>
              );
            })}
          </div>
        </div>
        <div className="temp4-heading">
          <h3>SKILLS</h3>
          <div className="temp4-skills-details">
            <div>
              <h4>Technical Skills</h4>
              <ul>
                {value.techskills.map((item) => {
                  return <li className="t4li">{item.techskill}</li>;
                })}
              </ul>
            </div>
            <div>
              <h4>Soft-Skills</h4>
              <ul>
                {value.skills.map((item) => {
                  return <li>{item.skill}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default Template4;
