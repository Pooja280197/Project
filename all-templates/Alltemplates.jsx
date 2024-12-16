import React ,{useEffect}from 'react'

import '../../pages/all-templates/Alltemplates.css'
import { Link,useNavigate } from "react-router-dom";
import Header from '../../components/header/Header';
import temp1 from '../../assets/images/Template1.jpg';
import temp2 from '../../assets/images/Template2.jpg';
import temp3 from '../../assets/images/Template3.jpg';
import temp4 from '../../assets/images/Template4.jpg';
import temp5 from '../../assets/images/Template5.jpg';
import temp6 from '../../assets/images/Template6.jpg';
import temp7 from '../../assets/images/Template7.jpg';

// import Aos from 'aos';
 

function Alltemplates() {
  
//   useEffect(() => {
//     Aos.init({ duration: 1500 });  // Initialize AOS with animation duration
// }, []); 
 
const templates = [
  { name: 'template1', image: temp1 },
  { name: 'template2', image: temp2 },
  { name: 'template3', image: temp3 },
  { name: 'template4', image: temp4 },
  { name: 'template5', image: temp5 },
  { name: 'template6', image: temp6 },

];
 
const nav = useNavigate()
const handleclick=((template)=>{
  nav('/Form',{state:{tempids:template}}) 
})

  return (
    <>
    <Header/>
    <div className='temps'>
      <div className='allheading'  data-aos="fade-up">
        <h1>Choose any template and create a resume in minutes</h1>
        <p>Pick the one that fits your style, fill in your details, and download your resume in just a few clicks. It's fast, simple, and tailored to help you stand out.</p>
      </div>
      <div className='alltemps'  data-aos="fade-up">
      {templates.map((template, index) => (
        <div key={index} className="containers">
          <img src={template.image} alt={template.name} />
          <button onClick={()=>handleclick(template.name)} className="usebutton">Use This Template</button>
        </div>
      ))}
      </div>
      </div>

    </>
  )
}

export default Alltemplates
