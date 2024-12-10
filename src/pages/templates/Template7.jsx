import React from 'react'
import '../templates_css/Template7.css'

function Template7({ value }) {
    return (
        <>
            <div className='a4page template7' id='template7'>
                <div className='t7upper'>
                    <div className='t7name'>
                        <h1>{value.fname} {value.lname}</h1>
                        <h3>{value.profession}</h3>
                        <hr />
                    </div>
                    <div className='t7contact'>
                        <i class="fi fi-tr-mobile-button ">   {value.contact} |</i>
                        <i class="fi fi-rr-envelope">    {value.email} |</i>
                        <i class="fi fi-ss-marker">    {value.address} |</i>
                        <i class="fi fi-brands-linkedin">    {value.linkedin}</i>
                    </div>


                </div>
                <div className='t7lower'>
                    <div className='t7left'>
                    <div className='t7block'>
                    <h3 className='t7heading'>OBJECTIVE</h3>
                            <p>{value.objective}</p>

                    </div>


                        <div className='t7block'>
                        <h3 className='t7heading'>EDUCATION</h3>
                            <div >
                                {
                                    value.education.map((items) => {
                                        return (
                                            <>
                                                <h4 className='t7head4'>{items.degree},{items.year}</h4>
                                                <p className='t7para'>{items.college},{items.university}</p>
                                            </>
                                        )

                                    })
                                }
                            </div>
                        </div>
                        {value.experience && value.experience.length > 1 && (
                            <div className="t7block">
                                <h3 className='t7heading'>EXPERIENCE</h3>
                                <div>
                                    {value.experience.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <h4 className='t7head4'>{item.jobprofile}, ({item.from}-{item.to})</h4>
                                            <h5 className='t7head5'>{item.company}, {item.city}</h5>
                                            <p className='t7para'>{item.description}</p>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className='t7block'>
                        <h3 className='t7heading'>PROJECT</h3>
                        {
                  value.project.map((items)=>{
                     return(
                      <>
                      <h4 className='t7head4'>{items.pname}</h4>
                      <h5 className='t7head5'>Technologies used:{items.ptech}</h5>
                      <p className='t7para'>{items.pdesc}</p>
                      </>
                     )
                  })
                }

                        </div>
                    </div>
                    <div className='t7right' >


                        <div >
                            <h3 className='t7heading'>TECHNICAL SKILLS</h3>
                            <ul>
                                {value.techskills.map((item) => {
                                    return (

                                        <li>{item.techskill}</li>

                                    )

                                })}
                            </ul>

                        </div>



                        <div >
                            <h3 className='t7heading'>SOFT SKILLS</h3>
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

export default Template7
