import React from 'react'
import '../templates_css/Template2.css'



function Template2({ value }) {
  return (
    <>
    <div className='a4size template2' id='template2'>
      <div className='temp2-name'>
      <h1>{value.fname} {value.lname}</h1>
      <h2>{value.profession}</h2>
      <p>{value.objective}</p>
     </div>
     <div className='temp2-contact'>
      <ul>
         <li><i class="fi fi-tr-mobile-button ">   {value.contact}</i></li>
            <li><i class="fi fi-rr-envelope">    {value.email}</i></li>
            <li><i class="fi fi-ss-marker">    {value.address}</i></li>
            <li><i class="fi fi-brands-linkedin">    {value.linkedin}</i></li>
            </ul>
     </div>
     <div>
      <h3>Technical Skills</h3>
      <hr/>
      {value.techskills.map((item) => {
                return (
                  <ul>
                    <li>{item.techskill}</li>
                  </ul>
                )

              })}
     </div>
     <div>
     <h3>Experience</h3>
     <hr />
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
     <h3>Education</h3>
     <hr />
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
     <h3>Project</h3>
     <hr/>
            {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4>{items.pname}</h4>
                      <p className='template-project-tech'>Technologies used:{items.ptech}</p>
                      <p>{items.pdesc}</p>
                      </>
                     )
                  })
                }
            
     
     </div>
     <div>
      <h3>Soft-Skills</h3>
      <hr/>
      <ul>
            {
              value.skills.map((items)=>{
                return(
               
                    <li>{items.skill}</li>
                    
                 
                )

              })
            }
             </ul>
            

     </div>


    </div>
      
            
           
           
         
          
    </>
  )
}

export default Template2
