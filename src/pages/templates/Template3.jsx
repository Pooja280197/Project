import React from 'react'
import '../templates_css/Template3.css'

function Template3({ value }) {
    return (
        <>
            <div className='a4size template3' id='template3'>
              <div className='temp3-name'>
              <h1>{value.fname} {value.lname}</h1>
              <h2>{value.profession}</h2>
              </div>
              <div className='temp3-contact'>
              <ul>
         <li><i class="fi fi-tr-mobile-button ">  </i> {value.contact}</li>
            <li><i class="fi fi-rr-envelope">  </i>  {value.email}</li>
            <li><i class="fi fi-ss-marker">    </i>{value.address}</li>
            <li><i class="fi fi-brands-linkedin">    </i>{value.linkedin}</li>
            </ul>

              </div>
              <div className='temp3-main-content'>
                <div>
                <h3>OBJECTIVE</h3>
                 <p>{value.objective}</p>
                </div>
                <div>
                <h3>EDUCATION</h3>
                {
                value.education.map((items) => {
                  return (
                    <>
                      <h4>{items.degree},{items.year}</h4>
                      <p>{items.college},{items.university}</p>
                   </>
                  )

                })
              }

                </div>
                <div>
                  <h3>EXPERIENCE</h3>
                  {
                value.experience.map((items) => {
                  return (
                    <>
                        <h4>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5>{items.company},{items.city}</h5>
                        <p>{items.description}</p>
                      
                    </>

                  )
                })
              }

                </div>
                <div>
                <h3>PROJECT</h3>
                {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4>{items.pname}</h4>
                      <h5>Technologies used:{items.ptech}</h5>
                      <p>{items.pdesc}</p>
                      </>
                     )
                  })
                }

                </div>
                <div className='temp3-skills'>
                  <div>
                    <h3>TECHNICAL SKILLS</h3>
                    <ul>
               {value.techskills.map((item) => {
              return (
                
                  <li>{item.techskill}</li>
               
              )

            })}
             </ul>

                  </div>
                  <div>
                    <h3>SOFT SKILLS</h3>
                    <ul>
               {value.skills.map((item) => {
              return (
               
                  <li>{item.skill}</li>
                
              )

            })}
            </ul>

                  </div>

                </div>

              </div>
            
               
                

             
               
              
               
        
               
                  


              
            </div>
        </>
    )
}

export default Template3
