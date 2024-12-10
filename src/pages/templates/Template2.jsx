import React from 'react'
import temp2 from '../../pages/templates_css/Template2.module.css'

function Template2({ value }) {
  return (
    <>
      <div className={`${temp2.a4page} ${temp2.template2}`} id='template1'>
      
      
          <div className={temp2.upper}>
            <h1 className={temp2.name}>{value.fname} {value.lname}</h1>
            <p className={temp2.prof}>{value.profession}</p>
            <p style={{ marginTop: "10px", fontSize: '15px' }}>{value.objective}</p>
          </div>
          <div className={temp2.contact}>
            <i class="fi fi-tr-mobile-button ">   {value.contact}</i>
            <i class="fi fi-rr-envelope">    {value.email}</i>
            <i class="fi fi-ss-marker">    {value.address}</i>
            <i class="fi fi-brands-linkedin">    {value.linkedin}</i>
          </div>
          <div className={temp2.lower}>
            
            <div className={temp2.tech}>
              <p className={temp2.heading}>Technical Skills</p>
              <hr />

              {value.techskills.map((item) => {
                return (
                  <ul>
                    <li>{item.techskill}</li>
                  </ul>
                )

              })}
            </div>
            
           
            <div className={temp2.exp}>
              <p className={temp2.heading}>Experience</p>
              <hr />
              {
                value.experience.map((items) => {
                  return (
                    <>
                      <h4 className={temp2.head1}>{items.jobprofile} , ({items.from}-{items.to})</h4>
                      <h5 className={temp2.head2}>{items.company},{items.city}</h5>
                      <p className={temp2.desc}>{items.description}</p>

                    </>

                  )
                })
              }
            </div>
            <div className={temp2.edu}>
              <p className={temp2.heading}>Education</p>
              <hr />
              {
                value.education.map((items) => {
                  return (
                    <>
                      <h4 className={temp2.head1}>{items.degree},{items.year}</h4>
                      <p className={temp2.desc}>{items.college},{items.university}</p>
                    </>
                  )

                })
              }

            </div>
            <div className={temp2.project}>
            <p className={temp2.heading}>Project</p>
            <hr/>
            {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className={temp2.head1}>{items.pname}</h4>
                      <p className={temp2.technology}>Technologies used:{items.ptech}</p>
                      <p className={temp2.desc}>{items.pdesc}</p>
                      </>
                     )
                  })
                }
            </div>
            <div>
            <p className={temp2.heading}>Skills</p>
            <hr/>
            {
              value.skills.map((items)=>{
                return(
                  <tr>
                    <td className={temp2.desc}>{items.skill}</td>
                    
                  </tr>
                )

              })
            }
            </div>


          </div>
      


      </div>
    </>
  )
}

export default Template2
