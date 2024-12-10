import React from 'react'
import '../templates_css/Template1.css'


function Template1({ value }) {
 
  return (
    <>
      <div className='a4page template1' id='template1'>
        <div className='t1leftside'>

          <div className='t1contact'>
            <h3>Contact</h3>
            <br></br>
            <i class="fi fi-tr-mobile-button ">   {value.contact}</i><br></br>
            <i class="fi fi-rr-envelope">    {value.email}</i><br></br>
            <i class="fi fi-ss-marker">    {value.address}</i><br></br>
            <i class="fi fi-brands-linkedin">    {value.linkedin}</i> 

          </div>
          <div className='t1tech'>
            <h3>Technical-Skills</h3>

            {value.techskills.map((item) => {
              return (
                <ul>
                  <li>{item.techskill}</li>
                </ul>
              )

            })}
           
            <div className='t1skills'>
              <h3>Soft-Skills</h3>
              {value.skills.map((item) => {
                return (
                  <ul>
                    <li>{item.skill}</li>
                  </ul>
                )

              })}
            </div>


          </div>
        </div>
        <div className='t1rightside'>
          <div className='t1head'>
            <h1>{value.fname} {value.lname}</h1>

            <h2>{value.profession}</h2>

          </div>
          <div className='t1obj'>
            <h3 >Objective</h3>
            <p >{value.objective}</p>
            <div className='t1exp'>
              <h3>Experience</h3>
              {
                value.experience.map((items) => {
                  return (
                    <>
                      <div className='t1exp '>
                        <h4>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5>{items.company},{items.city}</h5>
                        <p className='t1expdesc'>{items.description}</p>
                      </div>
                    </>

                  )
                })
              }
               </div>
              <h3>Education</h3>
              {
                value.education.map((items) => {
                  return (
                    <>
                    <div >
                      <h4 className='t1edu'>{items.degree},{items.year}</h4>
                      <p>{items.college},{items.university}</p>
                   </div>
                    </>
                  )

                })
              }
              <div className='t1project'>
                <h3>Project</h3>
                {
                  value.project.map((items)=>{
                     return(
                      <>
                      <div >
                      <h4>{items.pname}</h4>
                      <p className='t1ptech'>Technologies used:{items.ptech}</p>
                      <p>{items.pdesc}</p>
                      </div>
                      </>
                     )
                  })
                }

              </div>
           


          </div>
        </div>
      </div>
    
    </>
  )
}


export default Template1
