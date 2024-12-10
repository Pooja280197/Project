import React from 'react'
import '../templates_css/Template8.css'

function Template8({ value }) {
    return (
        <>
            <div className='a4page template8' id='template8'>
                <div className='t8upper'>
                    <h1 className='t8name'>{value.fname} {value.lname}</h1>
                    <h3>{value.profession}</h3>
                    <div className='t8contact'>
                        <i class="fi fi-tr-mobile-button ">   {value.contact}</i>
                        <i class="fi fi-rr-envelope">    {value.email}</i>
                        <i class="fi fi-ss-marker">    {value.address}</i><br></br>
                        <i class="fi fi-brands-linkedin">    {value.linkedin}</i>
                    </div>
                </div>
                <div/>
                <div className='t8lower'>
                <h3 className='t8heading'>OBJECTIVE</h3>
                <div className='t8obj'>
                   <p>{value.objective}</p>

                </div>
                <h3 className='t8heading'>EDUCATION</h3>
                <div className='t8description'>
                {
                value.education.map((items) => {
                  return (
                    <>
                      <h4 className='t8head4'>{items.degree},{items.year}</h4>
                      <p className='t8para'>{items.college},{items.university}</p>
                   </>
                  )

                })
              }
               </div>
               <h3 className='t8heading'>EXPERIENCE</h3>
               <div className='t8description'>
               {
                value.experience.map((items) => {
                  return (
                    <>
                        <h4 className='t8head4'>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5 className='t8head5'>{items.company},{items.city}</h5>
                        <p className='t8para'>{items.description}</p>
                      
                    </>

                  )
                })
              }
               </div>
               <h3 className='t8heading'>PROJECT</h3>
               <div className='t8description'>
               
                {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className='t8head4'>{items.pname}</h4>
                      <h5 className='t8head5'>Technologies used:{items.ptech}</h5>
                      <p className='t8para'>{items.pdesc}</p>
                      </>
                     )
                  })
                }
               </div>
               <div className='t8skills'>
                <div className='t8tech'>
               <h3 className='t8heading'>TECHNICAL-SKILLS</h3>
               <ul>
               {value.techskills.map((item) => {
              return (
                
                  <li className='t8li'>{item.techskill}</li>
               
              )

            })}
             </ul>
               </div>
               <div>
               <h3 className='t8heading'>SOFT-SKILLS</h3>
               <ul className='t8ul'>
               {value.skills.map((item) => {
              return (
               
                  <li className='t8li'>{item.skill}</li>
                
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

export default Template8
