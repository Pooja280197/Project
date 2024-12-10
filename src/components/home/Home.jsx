import React from "react";
import "../home/Home.css";
import img1 from "../../assets/images/Home-img1.png";
import Header from "../header/Header";
import steps from "../../assets/images/steps.jpg";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {

  const nav = useNavigate()
  return (
    <>
      <Header />
      <div id="home" className="content">
        <div className="home-part1">
          <div className="part1-left">
            <h2>Struggling to Get Noticed?</h2>
            <h3> We’ve Got You Covered!</h3>
            <p>
              Your resume is your first impression—make it count! Quick Resume
              helps you craft a polished, professional resume tailored to stand
              out. No more rejections. Just opportunities waiting for you!
            </p>
            <h1>Create a professional resume</h1>
            <p>
              Choose a template ,fill the form and download your resume
              instantly.
            </p>
            <button onClick={() => { nav('/alltemplates') }} className="create-button">Create Resume</button>
          </div>
          <div className="part1-right">
            <img src={img1} />
          </div>
        </div>
          <div id="steps_to_use" className="home-part2">
            <h1>How to Build Your Resume in 3 Easy Steps</h1>
            <img src={steps}></img>
            <br/>
            <button onClick={() => { nav('/alltemplates') }}className="make-button">Make a Resume</button>
          </div>
      </div>
      <Features/>
      <Footer/>
    </>
  );
}

export default Home;
