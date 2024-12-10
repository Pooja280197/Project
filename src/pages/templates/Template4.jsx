import React from 'react'
import '../templates_css/Template4.css'

function Template4({ value }) {
  return (
    <>
      <div className='a4page template4' id='template4'>
        <div className='t4upper'>
          <div>
            <i class="fi fi-tr-mobile-button ">   {value.contact}</i>
            <i class="fi fi-rr-envelope">    {value.email}</i>
            <i class="fi fi-ss-marker">    {value.address}</i>
            <i class="fi fi-brands-linkedin">    {value.linkedin}</i>

          </div>
          <div className='namehead'>
            <h1>{value.fname} {value.lname}</h1>
            <h3>{value.profession}</h3>

          </div>


        </div>
        <div className='t4lower'>
        <div className='t4obj'>
          <p>{value.objective}</p>
        </div>
        <div className='t4block'>
          <div className='t4heading'>
            EDUCATION
          </div>
          <div className='t4desc'>
          {
                value.education.map((items) => {
                  return (
                    <>
                      <h4 className='t4head4'>{items.degree},{items.year}</h4>
                      <p className='t4para'>{items.college},{items.university}</p>
                   </>
                  )

                })
              }
          </div>

        </div>
        <div className='t4block'>
          <div className='t4heading'>
            EXPERIENCE
          </div>
          <div >
          {
                value.experience.map((items) => {
                  return (
                    <>
                     <h4 className='t4head4'>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5 className='t4head5'>{items.company},{items.city}</h5>
                        <p className='t4desc'>{items.description}</p>
                   </>
                  )

                })
              }
          </div>

        </div>
        <div className='t4block'>
          <div className='t4heading'>
            PROJECT
          </div>
          <div>
          {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className='t4head4'>{items.pname}</h4>
                      <h5 className='t4head5'>Technologies used:{items.ptech}</h5>
                      <p className='t4desc'>{items.pdesc}</p>
                      </>
                     )
                  })
                }
          </div>

        </div>
        <div className='t4skillsblock'>
          <div className='t4heading'>
            SKILLS
          </div>
          <div >
           
            <ul>
            <h4 className='t4head4'>Technical Skills</h4>
               {value.techskills.map((item) => {
              return (
                
                  <li className='t4li'>{item.techskill}</li>
               
              )

            })}
             </ul>
         
          </div>
          <div >
            
            <ul>
            <h4 className='t4head4'>Soft-Skills</h4>
               {value.skills.map((item) => {
              return (
                
                  <li className='t4li'>{item.skill}</li>
               
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

export default Template4
