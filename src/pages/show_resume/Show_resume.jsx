import React, { useEffect, useState } from "react";
import "../show_resume/Show_resume.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Template1 from "../../pages/templates/Template1";
import Template2 from "../../pages/templates/Template2";
import Template3 from "../../pages/templates/Template3";
import Template4 from "../../pages/templates/Template4";
import Template5 from "../../pages/templates/Template5";
import Template6 from "../../pages/templates/Template6";
import Template7 from "../../pages/templates/Template7";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getApiData, sendApiData } from "../../redux/Action";
import Header from "../../components/header/Header";

function Show_resume() {
  const [data, setData] = useState([]);

  const userids = useLocation();
  const ids = userids.state.userid;
  console.log(ids);
useEffect(()=>{
  axios.get(`https://66a495bb5dc27a3c190945ee.mockapi.io/template/${ids}`)
  // axios.get(`https://66a495bb5dc27a3c190945ee.mockapi.io/template/1`)
  .then((res)=>{
      console.log(res.data)
      setData(res.data)


  })
  .catch((err)=>{
      console.log('Data not received')
})
},[])

const downloadPDF = () => {
  const input = document.getElementById(data.category); // Get the resume div
  const scaleFactor = window.innerWidth <= 600 ?  12: 5;

  html2canvas(input, {
    scale: scaleFactor, // Adjust the scale dynamically
    useCORS: true, // Fix issues when images are used
    windowWidth: input.scrollWidth, // Ensure full width is captured
    windowHeight: input.scrollHeight,
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Convert to image
      const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 300; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); // Add image to PDF
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${data.fname}_${data.lname}_Resume.pdf`); // Save the PDF with a filename
    });
};

  return (
    <>
      <Header/>
      <div className="showresume">
        <div>
        {data.category === "template1" && <Template1 value={data} />}
        {data.category === "template2" && <Template2 value={data} />}
        {data.category === "template3" && <Template3 value={data} />}
        {data.category === "template4" && <Template4 value={data} />}
        {data.category === "template5" && <Template5 value={data} />}
        {data.category === "template6" && <Template6 value={data} />}
    
        </div>
        <div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
        </div>
       
      </div>
    </>
  );
}

export default Show_resume;
