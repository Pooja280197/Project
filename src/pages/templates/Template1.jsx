import React from 'react'
import '../templates_css/Template1.css'


function Template1({ value }) {
 
  return (
    <>
    <div className='a4size template1'id='template1'>
      <div className='t1left-content'>
        <div className='contact'>
        <h3>Contact</h3>
            <ul>
              <li>  <i class="fi fi-tr-mobile-button "> </i>  {value.contact}</li>
              <li><i class="fi fi-rr-envelope">   </i> {value.email}</li>
              <li> <i class="fi fi-ss-marker">   </i> {value.address}</li>
              <li>            <i class="fi fi-brands-linkedin">  </i>   {value.linkedin}</li>

</ul>

        

        </div>
        <div className='tech-skills'>
        <h3>Technical-Skills</h3>

{value.techskills.map((item) => {
  return (
    <ul>
      <li>{item.techskill}</li>
    </ul>
  )

})}

</div>
<div className='soft-skills'>
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
<div className='t1right-content'>
  <div className='temp1-name'>
  <h1>{value.fname} {value.lname}</h1>
   <h2>{value.profession}</h2>
    
  </div>
  <div className='temp1-objective'>
  <h3 >Objective</h3>
  <p >{value.objective}</p>

  </div>
  <div className='temp1-experience'>
  <h3>Experience</h3>
              {
                value.experience.map((items) => {
                  return (
                    <>
                      <div>
                        <h4>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5>{items.company},{items.city}</h5>
                        <p>{items.description}</p>
                      </div>
                    </>

                  )
                })
              }

  </div>
  <div className='temp1-education'>
  <h3>Education</h3>
              {
                value.education.map((items) => {
                  return (
                    <>
                    <div >
                      <h4 >{items.degree},{items.year}</h4>
                      <p>{items.college},{items.university}</p>
                   </div>
                    </>
                  )

                })
              }

  </div>
  <div className='temp1-project'>
  <h3>Project</h3>
                {
                  value.project.map((items)=>{
                     return(
                      <>
                      <div >
                      <h4>{items.pname}</h4>
                      <p className='template-project-tech'>Technologies used:{items.ptech}</p>
                      <p>{items.pdesc}</p>
                      </div>
                      </>
                     )
                  })
                }

  </div>


</div>
       
    </div>
      {/* 
          
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
      </div> */}
    
    </>
  )
}


export default Template1
