import React from "react";
import "../templates_css/Template6.css";

function Template6({ value }) {
  return (
    <>
      <div className="a4size template6" id="template6">
        <div className="temp6-left">
          <div>
            <img src={value.image} />
          </div>
          <div className="temp6-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <i class="fi fi-tr-mobile-button "> </i> {value.contact}
              </li>
              <li>
                <i class="fi fi-rr-envelope"> </i> {value.email}
              </li>
              <li>
                <i class="fi fi-ss-marker"> </i> {value.address}
              </li>
              <li>
                <i class="fi fi-brands-linkedin"> </i> {value.linkedin}
              </li>
            </ul>
          </div>
          <div>
            <h3>Technical Skills</h3>
            <ul>
              {value.techskills.map((item) => {
                return <li>{item.techskill}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <ul>
              {value.skills.map((item) => {
                return <li>{item.skill}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="temp6-right">
          <div>
            <h1>
              {value.fname} {value.lname}
            </h1>
            <h2>{value.profession}</h2>
            <p>{value.objective}</p>
          </div>

          <div>
            <h3>Education</h3>
            {value.education.map((items) => {
              return (
                <>
                  <h4 className="t6head4">
                    {items.degree},{items.year}
                  </h4>
                  <p className="t6para">
                    {items.college},{items.university}
                  </p>
                </>
              );
            })}
          </div>
          <div>
            <h3>Experience</h3>

            {value.experience.map((item, index) => (
              <React.Fragment key={index}>
                <h4 className="t6head4">
                  {item.jobprofile}, ({item.from}-{item.to})
                </h4>
                <h5 className="t6head5">
                  {item.company}, {item.city}
                </h5>
                <p className="t6para">{item.description}</p>
              </React.Fragment>
            ))}
          </div>
          <div>
            <h3>Project</h3>
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
      </div>
    </>
  );
}

export default Template6;
