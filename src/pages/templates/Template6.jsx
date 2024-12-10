import React from 'react'
import '../templates_css/Template6.css'

function Template6({ value }) {
    return (
        <>
            <div className='a4page template6' id='template6'>


                <div className='t6left'>
                    <div className='t6leftdata'>
                        <div className='t6image'> <img src={value.image} /></div>

                        <div className='t6contact'>
                            <h3 className='t6heading'>CONTACT</h3>
                            <i class="fi fi-tr-mobile-button ">   {value.contact}</i>
                            <i class="fi fi-rr-envelope">    {value.email}</i>
                            <i class="fi fi-ss-marker">    {value.address}</i>
                            <i class="fi fi-brands-linkedin">    {value.linkedin}</i>
                        </div>

                        <div className='t6skills'>
                            <h3 className='t6heading'>TECHNICAL SKILLS</h3>
                            <ul>
                                {value.techskills.map((item) => {
                                    return (

                                        <li>{item.techskill}</li>

                                    )

                                })}
                            </ul>

                        </div>
                    </div>

                    <div className='t6skills'>
                        <h3 className='t6heading'>SOFT SKILLS</h3>
                        <ul>
                            {value.skills.map((item) => {
                                return (

                                    <li>{item.skill}</li>

                                )

                            })}
                        </ul>


                    </div>



                </div>
                <div className='t6right'>
                    <div className='t6name'>
                        <h1>{value.fname} {value.lname}</h1>
                        <h3>{value.profession}</h3>
                        <p>{value.objective}</p>

                    </div>

                    <div className='t6rightdata'></div>
                    <div>
                        <div className='t6heading'>
                            EDUCATION
                        </div>
                        <div >
                            {
                                value.education.map((items) => {
                                    return (
                                        <>
                                            <h4 className='t6head4'>{items.degree},{items.year}</h4>
                                            <p className='t6para'>{items.college},{items.university}</p>
                                        </>
                                    )

                                })
                            }
                        </div>
                    </div>
                    {value.experience && value.experience.length >=1 && (
                            <div >
                                <h3 className='t6heading'>EXPERIENCE</h3>
                                <div>
                                    {value.experience.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <h4 className='t6head4'>{item.jobprofile}, ({item.from}-{item.to})</h4>
                                            <h5 className='t6head5'>{item.company}, {item.city}</h5>
                                            <p className='t6para'>{item.description}</p>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div >
                        <h3 className='t6heading'>PROJECT</h3>
               <div>
               {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className='t6head4'>{items.pname}</h4>
                      <h5 className='t6head5'>Technologies used:{items.ptech}</h5>
                      <p className='t6para'>{items.pdesc}</p>
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

export default Template6
