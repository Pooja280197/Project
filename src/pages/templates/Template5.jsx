import React from "react";
import "../templates_css/Template5.css";
function Template5({ value }) {
  return (
    <>
      <div className="a4size template5" id="template5">
        <div className="temp5-upper">
          <div className="temp5-img">
            <img src={value.image} />
          </div>
          <div className="temp5-name">
            <h1>
              {value.fname} {value.lname}
            </h1>
            <h2>{value.profession}</h2>
            <p>{value.objective}</p>
          </div>
        </div>
        <div className="temp5-contact">
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
        <div className="temp5-bottom">
          <div className="temp5-leftside">
            <div>
              <h3>EDUCATION</h3>
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
            <div>
              <h3>EXPERIENCE</h3>
              {value.experience.map((item, index) => (
                <React.Fragment key={index}>
                  <h4 className="t5head4">
                    {item.jobprofile}, ({item.from}-{item.to})
                  </h4>
                  <h5 className="t5head5">
                    {item.company}, {item.city}
                  </h5>
                  <p className="t5para">{item.description}</p>
                </React.Fragment>
              ))}
            </div>
            <div>
              <h3 className="t5heading">PROJECT</h3>

              {value.project.map((items) => {
                return (
                  <>
                    <h4 className="t5head4">{items.pname}</h4>
                    <h5 className="t5head5">Technologies used:{items.ptech}</h5>
                    <p className="t5para">{items.pdesc}</p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="temp5-rightside">
            <div>
              <h3>TECHNICAL SKILLS</h3>
              <ul>
                {value.techskills.map((item) => {
                  return <li>{item.techskill}</li>;
                })}
              </ul>
            </div>
            <div>
              <h3>SOFT SKILLS</h3>
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

export default Template5;
