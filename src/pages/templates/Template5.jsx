import React from 'react'
import '../templates_css/Template5.css'
function Template5({ value }) {
    return (
        <>
            <div className='a4page template5' id='template5'>
                <div className='t5upper'>
                    <div> <img src={value.image} /></div>
                    <div className='t5name'>
                        <h1>{value.fname} {value.lname}</h1>
                        <h3>{value.profession}</h3>
                        <p>{value.objective}</p>

                    </div>


                </div>
                <div className='t5contact'>
                    <i class="fi fi-tr-mobile-button ">   {value.contact}</i>
                    <i class="fi fi-rr-envelope">    {value.email}</i>
                    <i class="fi fi-ss-marker">    {value.address}</i>
                    <i class="fi fi-brands-linkedin">    {value.linkedin}</i>
                </div>
                <div className='t5lower'>
                    <div className='t5left'>
                        <div className='t5block'>
                        <h3 className='t5heading'>EDUCATION</h3>
                <div >
                {
                value.education.map((items) => {
                  return (
                    <>
                      <h4 className='t5head4'>{items.degree},{items.year}</h4>
                      <p className='t5para'>{items.college},{items.university}</p>
                   </>
                  )

                })
              }
               </div>
                        </div>
                        {value.experience && value.experience.length > 1 && (
                            <div className="t5block">
                                <h3 className='t5heading'>EXPERIENCE</h3>
                                <div>
                                    {value.experience.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <h4 className='t5head4'>{item.jobprofile}, ({item.from}-{item.to})</h4>
                                            <h5 className='t5head5'>{item.company}, {item.city}</h5>
                                            <p className='t5para'>{item.description}</p>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* <div className="t5block">
                        <h3 className='t5heading'>EXPERIENCE</h3>
               <div>
               {
                value.experience.map((items) => {
                  return (
                    <>
                        <h4 className='t5head4'>{items.jobprofile} , ({items.from}-{items.to})</h4>
                        <h5 className='t5head5'>{items.company},{items.city}</h5>
                        <p className='t5para'>{items.description}</p>
                      
                    </>

                  )
                })
              }
               </div> */}
                        {/* </div> */}
                        <div className="t5block">
                        <h3 className='t5heading'>PROJECT</h3>
               <div>
               {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className='t5head4'>{items.pname}</h4>
                      <h5 className='t5head5'>Technologies used:{items.ptech}</h5>
                      <p className='t5para'>{items.pdesc}</p>
                      </>
                     )
                  })
                }
               </div>
                        </div>

                    </div>
                    <div className='t5right'>
                        <div className='t5skills'>
                        <h3 className='t5heading'>TECHNICAL SKILLS</h3>
                        <ul>
           
               {value.techskills.map((item) => {
              return (
                
                  <li className='t5li'>{item.techskill}</li>
               
              )

            })}
             </ul>

                        </div>
                        <div className='t5skills'>
                        <h3 className='t5heading'>SOFT SKILLS</h3>
                        <ul>
           
               {value.skills.map((item) => {
              return (
                
                  <li className='t5li'>{item.skill}</li>
               
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

export default Template5
