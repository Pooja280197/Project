import React, { useState } from 'react'
import '../form/Form.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {sendApiData} from '../../redux/Action'
import axios from 'axios'


function Form() {
  
  const tempid = useLocation()
  const id = tempid.state.tempids

    const allData=useSelector(item => item.allData)
    const dispatch = useDispatch()

    

    // const [ids, setIds] = useState('')
    
    let mydata = {
        image: null,
        category: id,
        fname: "",
        lname: "",
        profession: "",
        email: "",
        contact: "",
        address: "",
        linkedin: "",
        objective: "",
        education: [
            { degree: "", year: "", university: "", college: "" }
        ],
        skills: [{ skill: "" }],
        techskills: [{ techskill: "" }],
        experience: [{ company: "", from: "", to: "", jobprofile: "", city: "", description: "" }],
        project: [{ pname: "", ptech: "", pdesc: "" }]

    }
    const [formData, setFormData] = useState(mydata)


    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (upload) => {
    //             setFormData({ ...formData, image: upload.target.result });
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 75000) {
                alert('File size is too large! Profile image should be less than 75Kb');
                return;
            }
            const reader = new FileReader();
            reader.onload = (upload) => {
                setFormData({ ...formData, image: upload.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = ((e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    })

    //Education handling functions
    const handleEduChange = ((e, index) => {
        const updatedEducation = [...formData.education]
        updatedEducation[index][e.target.name] = e.target.value
        setFormData({ ...formData, education: updatedEducation })

    })
    const handleEduAdd = (() => {
        setFormData({
            ...formData,
            education: [...formData.education, { degree: "", year: "", university: "", college: "" }]
        });

    })
    const handleEduRemove = ((index) => {
        setFormData({
            ...formData, education: formData.education.filter((_, i) => i !== index)

        })

    })


    //skills handling functions
    const handleSkillChange = (e, index) => {
        const updatedSkills = formData.skills.map((value, i) => {
            if (i === index) {
                return { skill: e.target.value };
            } else {
                return value;
            }
        });
        setFormData({ ...formData, skills: updatedSkills });
    };
    const handleSkillAdd = () => {
        setFormData({
            ...formData,
            skills: [...formData.skills, ""]
        });
    };

    const handleSkillRemove = (index) => {
        // Only remove the skill if there is more than one in the list
        if (formData.skills.length > 1) {
            const updatedSkills = formData.skills.filter((_, i) => i !== index);
            setFormData({ ...formData, skills: updatedSkills });
        }
    };

    //Technical-skills handling functions
    const handleTechChange = (e, index) => {
        const updatedtechSkills = formData.techskills.map((value, i) => {
            if (i === index) {
                return { techskill: e.target.value };
            } else {
                return value;
            }
        });
        setFormData({ ...formData, techskills: updatedtechSkills });
    };
    const handleTechAdd = () => {
        setFormData({
            ...formData,
            techskills: [...formData.techskills, ""]
        });
    };

    const handleTechRemove = (index) => {
        // Only remove the skill if there is more than one in the list
        if (formData.techskills.length > 1) {
            const updatedtechSkills = formData.techskills.filter((_, i) => i !== index);
            setFormData({ ...formData, techskills: updatedtechSkills });
        }
    };




    //Experience handling functions

    function formatMonthYear(date) {
        const options = { year: 'numeric', month: 'long' }; // Format options
        const formattedDate = new Date(date + "-01").toLocaleDateString('en-US', options); // Convert to date and format
        return formattedDate; // E.g., "April-2024"
    }

    function handletimeChange(e, index) {
        const { name, value } = e.target;
        const formattedValue = formatMonthYear(value); // Format the date

        // Assuming `exp` is part of your state
        const updatedExp = [...formData.experience];
        updatedExp[index] = { ...updatedExp[index], [name]: formattedValue };

        setFormData({ ...formData, experience: updatedExp }); // Update state
    }

    const handleExpChange = ((e, index) => {
        const updatedExp = [...formData.experience]
        updatedExp[index][e.target.name] = e.target.value
        setFormData({ ...formData, experience: updatedExp })

    })
    const handleExpAdd = (() => {
        setFormData({
            ...formData,
            experience: [...formData.experience, { company: "", from: "", to: "", jobprofile: "", city: "", description: "" }]
        });

    })
    const handleExpRemove = ((index) => {
        setFormData({
            ...formData, experience: formData.experience.filter((_, i) => i !== index)

        })

    })

    //Project handling functions
    const handleProjectChange = ((e, index) => {
        const updatedproject = [...formData.project]
        updatedproject[index][e.target.name] = e.target.value
        setFormData({ ...formData, project: updatedproject })

    })
    const handleProjectAdd = (() => {
        setFormData({
            ...formData,
            project: [...formData.project, { pname: "", ptech: "", pdesc: "" }]
        });

    })
    const handleProjectRemove = ((index) => {
        setFormData({
            ...formData, project: formData.project.filter((_, i) => i !== index)

        })

    })

    //Onsubmit
    const nav = useNavigate()
    const dataadd = (e) => {
        e.preventDefault()

        axios.post("https://66a495bb5dc27a3c190945ee.mockapi.io/template", formData)

            .then((res) => {
                // setIds(res.data.id)
                setFormData(mydata)
                const id = res.data.id
                nav('/Resume', { state: { userid: id } })

            })
            .catch((err) => {
                console.log('Data not received')
            })
    }


  

    return (
        <>
        
        <div className="container grid-container">
          <h1 className='formhead'>Please fill in this form to create Resume.</h1>
      
          <form onSubmit={dataadd}>
            <div className="formblock details">
              <div>
                <label className="labels" style={{ marginLeft: "0px" }}>
                  PERSONAL DETAILS
                </label>
                <br />
              </div>
              
              <div>
               <label style={{ marginLeft: "30px" }}>Profile Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {formData.image && (
                  <div>
                    <img
                      src={formData.image}
                      alt="Profile Preview"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
             
              <div className="flexshow">
                <div className="formleft">
                  <div className="fields">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder='Enter first name'
                    />
                  </div>
                  <div className="fields">
                    <label>Email-id</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter email id'
                    />
                  </div>
                  <div className="fields">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder='Enter your address'
                    />
                  </div>
                  <div className="fields">
                    <label>LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder='Linkedin profile URL'
                    />
                  </div>
                </div>
      
                <div className="formright">
                  <div className="fields">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChange}
                      placeholder='Enter last name'
                    />
                  </div>
                  <div className="fields">
                    <label>Contact-no.</label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder='Enter contact number'
                    />
                  </div>
                  <div className="fields">
                    <label>Profession</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      placeholder='Enter your profession'
                    />
                  </div>
                </div>
              </div>
              <div>
                <label style={{ marginLeft: "30px" }}>Objective</label>
                <textarea
                  type="text"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder='Enter objective'
                />
              </div>
            </div>
      
            <div className="formedu">
              <div className="formblock details">
                <label className="labels" style={{ marginLeft: "0px" }}>
                  EDUCATION
                </label>
                {formData.education.map((edu, index) => (
                    <>
                  <div className="flexshow" key={index}>
                    <div className="formleft">
                      <label>Degree/class</label>
                      <input
                        type="text"
                        name="degree"
                        value={edu.degree}
                        placeholder="B.tech/BCA/10th/12th"
                        onChange={(e) => {
                          handleEduChange(e, index);
                        }}
                      />
                      <label>Passing Year</label>
                      <input
                        type="text"
                        name="year"
                        value={edu.year}
                        placeholder="Enter passing year"
                        onChange={(e) => {
                          handleEduChange(e, index);
                        }}
                      />
                    </div>
                    <div className="formright">
                      <label>College/School</label>
                      <input
                        type="text"
                        name="college"
                        value={edu.college}
                        placeholder="Enter college/school name"
                        onChange={(e) => {
                          handleEduChange(e, index);
                        }}
                      />
                      <label>University</label>
                      <input
                        type="text"
                        name="university"
                        value={edu.university}
                        placeholder="Enter University or Board name"
                        onChange={(e) => {
                          handleEduChange(e, index);
                        }}
                      />
                    </div>
                   
                   
                  </div>
                  <div className='formbuttons'>
                      {formData.education.length - 1 === index &&
                        formData.education.length < 10 && (
                          <button

                            type="button"
                            onClick={handleEduAdd}
                            className="formadd"
                          >
                            Add
                          </button>
                        )}
                        {formData.education.length > 1 && (
                      <button
                      className='formremove'
                        type="button"
                        onClick={() => handleEduRemove(index)}
                      >
                        Remove
                      </button>
                    )}
                        
                    </div>
                  </>
                ))}
              </div>

            </div>
      
            <div className="formblock">
              <label className="labels" style={{ marginLeft: "0px" }}>
                SKILLS
              </label>
              <br />
              <div className="flexskills">
                <div>
                  <label>Soft-Skills</label>
                  {formData.skills.map((s, index) => (
                    <>
                    <div className="formskill" key={index}>
                      <input
                        type="text"
                        name="skill"
                        value={s.skill}
                        onChange={(e) => handleSkillChange(e, index)}
                      />
                     
                       
                    </div>
                 
                    <div className='formbuttons'>
                      {formData.skills.length - 1 === index &&
                        formData.skills.length < 10 && (
                          <button type="button" onClick={handleSkillAdd}
                          className="formadd" style={{ marginLeft: "10px" }}>
                            Add
                          </button>
                        )}
                           {formData.skills.length > 1 && (
                        <button
                        className='formremove'
                          type="button"
                          onClick={() => handleSkillRemove(index)}
                        >
                          Remove
                        </button>
                      )}
                      </div>
                    </>
                  ))}
                </div>
                <div>
                  <label>Technical-Skills</label>
                  {formData.techskills.map((tech, index) => (
                    <>
                    <div className="formskill" key={index}>
                      <input
                        type="text"
                        name="techskill"
                        value={tech.techskill}
                        onChange={(e) => handleTechChange(e, index)}
                      />
                      
                    </div>
                    <div className='formbuttons'>
                      {formData.techskills.length - 1 === index &&
                        formData.techskills.length < 10 && (
                          <button type="button" onClick={handleTechAdd}  className="formadd" style={{ marginLeft: "10px" }}>
                            Add
                          </button>
                        )}
                         {formData.techskills.length > 1 && (
                        <button
                        className='formremove'
                          type="button"
                          onClick={() => handleTechRemove(index)}
                        >
                          Remove
                        </button>
                      )}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
      
            <div className="formblock">
              <label className="labels" style={{ marginLeft: "0px" }}>
                EXPERIENCE
              </label>
              {formData.experience.map((exp, index) => (
                <>
                <div className="details" key={index}>
                  <div className="flexshow">
                    <div className="formleft">
                      <div className="fields">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={exp.company}
                          placeholder="Enter Company name"
                          onChange={(e) => {
                            handleExpChange(e, index);
                          }}
                        />
                      </div>
                      <div className="fields">
                        <label>Job Profile</label>
                        <input
                          type="text"
                          name="jobprofile"
                          value={exp.jobprofile}
                          placeholder="Enter job profile"
                          onChange={(e) => {
                            handleExpChange(e, index);
                          }}
                        />
                      </div>
                      <div className="fields">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          value={exp.city}
                          placeholder="Enter City name"
                          onChange={(e) => {
                            handleExpChange(e, index);
                          }}
                        />
                      </div>
                      
                    </div>
                    <div className="formright">
                      <div className="fields">
                        <label>From</label>
                        <input
                          type="text"
                          name="from"
                          value={exp.from}
                          placeholder="Enter Month-Year ex- Jan 2024"
                          onChange={(e) => {
                            handleExpChange(e, index);
                          }}
                        />
                      </div>
                      <div className="fields">
                        <label>To</label>
                        <input
                          type="text"
                          name="to"
                          value={exp.to}
                          placeholder="Enter Month-Year ex- Jan 2024"
                          onChange={(e) => {
                            handleExpChange(e, index);
                          }}
                        />
                      </div>
                    </div>
                    </div>
                    <div>
                      <label>Description</label>
                      <textarea
                        type="text"
                        name="description"
                        value={exp.description}
                        placeholder="Write about your job experience"
                        onChange={(e) => {
                          handleExpChange(e, index);
                        }}
                      />
                    </div>
                  
                  </div>
                  <div className='formbuttons'>
                  {formData.experience.length - 1 === index &&
                      formData.experience.length < 10 && (
                        <button type="button" onClick={handleExpAdd}  className="formadd">
                          Add
                        </button>
                      )}
                    {formData.experience.length > 1 && (
                      <button
                      className='formremove'
                        type="button"
                        onClick={() => handleExpRemove(index)}
                      >
                        Remove
                      </button>
                    )}
                    </div>
                  </>
                
              ))}
            </div>
      
            <div className="formblock">
              <label className="labels" style={{ marginLeft: "0px" }}>
                PROJECT
              </label>
              {formData.project.map((project, index) => (
                <div key={index}  >
                    <div className='flexshow'>
                    <div className='formleft'>
                        <div className="fields">
                        <label>Project Name</label>
                  <input
                    type="text"
                    name="pname"
                    value={project.pname}
                    placeholder="Enter Project name"
                    onChange={(e) => {
                      handleProjectChange(e, index);
                    }}
                  />
                        </div>
                    </div>
                    <div className='formright'>
                    <div className="fields">
                        <label>Technologies used</label>
                  <input
                    type="text"
                    name="ptech"
                    value={project.ptech}
                    onChange={(e) => {
                      handleProjectChange(e, index);
                    }}
                  />

                        </div>

                    </div>
                    </div>
                        
               
                
                  <label>Project Description</label>
                  <textarea
                    type="text"
                    name="pdesc"
                    value={project.pdesc}
                     placeholder='Project description'
                    onChange={(e) => {
                      handleProjectChange(e, index);
                     
                    }}
                  />
                  <div className='formbuttons'>
                  {formData.project.length - 1 === index &&
                    formData.project.length < 10 && (
                      <button type="button" onClick={handleProjectAdd}  className="formadd" >
                        Add
                      </button>
                    )}
                  {formData.project.length > 1 && (
                    <button
                    className='formremove'
                      type="button"
                      onClick={() => handleProjectRemove(index)}
                    >
                      Remove
                    </button>
                  )}
                  </div>
                </div>
              ))}
            </div>
            <br/>
      
            <input type="submit" className="registerbtn" />
          </form>
        </div>
      </>
      
    )
}

export default Form
