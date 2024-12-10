import React from 'react'
import '../templates_css/Template3.css'

function Template3({ value }) {
    return (
        <>
            <div className='a4page template3' id='template3'>
                <div className='t3upper'>
                    <h1 className='t3name'>{value.fname} {value.lname}</h1>
                    <h3>{value.profession}</h3>
                    <div className='t3contact'>
                        <i class="fi fi-tr-mobile-button ">   {value.contact}</i>
                        <i class="fi fi-rr-envelope">    {value.email}</i>
                        <i class="fi fi-ss-marker">    {value.address}</i><br></br>
                        <i class="fi fi-brands-linkedin">    {value.linkedin}</i>
                    </div>
                </div>
                <div/>
                <div className='t3lower'>
                <h3 className='t3heading'>OBJECTIVE</h3>
                <div className='t3obj'>
                   <p>{value.objective}</p>

                </div>
                <h3 className='t3heading'>EDUCATION</h3>
                <div className='t3description'>
                {
                value.education.map((items) => {
                  return (
                    <>
                      <h4 className='t3head4'>{items.degree},{items.year}</h4>
                      <p className='t3para'>{items.college},{items.university}</p>
                   </>
                  )

                })
              }
               </div>
               <h3 className='t3heading'>EXPERIENCE</h3>
               <div className='t3description'>
               {
                value.experience.map((items) => {
                  return (
                    <>
                        <h4 className='t3head4'>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5 className='t3head5'>{items.company},{items.city}</h5>
                        <p className='t3para'>{items.description}</p>
                      
                    </>

                  )
                })
              }
               </div>
               <h3 className='t3heading'>PROJECT</h3>
               <div className='t3description'>
               
                {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className='t3head4'>{items.pname}</h4>
                      <h5 className='t3head5'>Technologies used:{items.ptech}</h5>
                      <p className='t3para'>{items.pdesc}</p>
                      </>
                     )
                  })
                }
               </div>
               <div className='t3skills'>
                <div className='t3tech'>
               <h3 className='t3heading'>TECHNICAL-SKILLS</h3>
               <ul>
               {value.techskills.map((item) => {
              return (
                
                  <li className='t3li'>{item.techskill}</li>
               
              )

            })}
             </ul>
               </div>
               <div>
               <h3 className='t3heading'>SOFT-SKILLS</h3>
               <ul className='t3ul'>
               {value.skills.map((item) => {
              return (
               
                  <li className='t3li'>{item.skill}</li>
                
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
