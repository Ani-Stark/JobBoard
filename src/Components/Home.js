import React from "react";
import Login from "./Login";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";


function Home() {
    
  return (
    <>
    <div class="board">
        <h1>JOB BOARD</h1>
      </div>

      <div class="container">
        <div class="inner-width">
          <div class="jobs">
            <div class="header">

              <div class="job-header">
                <div class="job-category">
                  <span class="category">Photoshop</span>
                  <span class="new">New</span>
                  <span class="featured">Featured</span>
                </div>
                <h3 class="title">Frontend Developer</h3>
                <p class="properties">
                  <spam class="timestamp">5 Mar 2021</spam>
                  <span class="type">Contract</span>
                  <span class="country">USA only</span>
                </p>
              </div>
            </div>
            <div class="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div class="jobs">
            <div class="header">

              <div class="job-header">
                <div class="job-category">
                  <span class="category">Web Development</span>
                  <span class="new">New</span>
                  <span class="featured">Featured</span>
                  </div>
                <h3 class="title">Full Stack Developer</h3>
                <p class="properties">
                  <spam class="timestamp">2 July 2022</spam>
                  <span class="type">Contract</span>
                  <span class="country">New York</span>
                </p>
              </div>
            </div>
            <div class="tags">
              <span>Bootstrap</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div class="jobs">
            <div class="header">

              <div class="job-header">
                <div class="job-category">
                  <span class="category">UX/UI</span>
                
                  </div>
                <h3 class="title">Graphic Designer</h3>
                <p class="properties">
                  <spam class="timestamp">3 April 2023</spam>
                  <span class="type">Contract</span>
                  <span class="country">USA only</span>
                </p>
              </div>
            </div>
            <div class="tags">
              <span>Figma</span>
              <span>Adobe XD</span>
            </div>
          </div>
          <div class="jobs">
            <div class="header">

              <div class="job-header">
                <div class="job-category">
                  <span class="category">Big Data</span>
                  <span class="new">New</span>
                  <span class="featured">Featured</span>                 

                  </div>
                <h3 class="title">Data Analyst</h3>
                <p class="properties">
                  <spam class="timestamp">5 Aug 2021</spam>
                  <span class="type">Contract</span>
                  <span class="country">California</span>
                </p>
              </div>
            </div>
            <div class="tags">
              <span>MySQL</span>
              <span>Oracle</span>
            </div>
          </div>
          <div class="jobs">
            <div class="header">

              <div class="job-header">
                <div class="job-category">
                  <span class="category">AI/ML</span>
                  <span class="new">New</span>
                  <span class="featured">Featured</span>                 
                  </div>
                <h3 class="title">Backend Developer</h3>
                <p class="properties">
                  <spam class="timestamp">25 May 2023</spam>
                  <span class="type">Contract</span>
                  <span class="country">London</span>
                </p>
              </div>
            </div>
            <div class="tags">
              <span>Python</span>
              <span>Java</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div class="jobs">
            <div class="header">

              <div class="job-header">
                <div class="job-category">
                  <span class="category">Big Data</span>
                  <span class="new">New</span>
                  <span class="featured">Featured</span>
                  </div>
                <h3 class="title">Data Scientist</h3>
                <p class="properties">
                  <spam class="timestamp">31 Oct 2022</spam>
                  <span class="type">Contract</span>
                  <span class="country">South Wales</span>
                </p>
              </div>
            </div>
            <div class="tags">
              <span>MySQL</span>
              <span>Oracle</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>


      <Link to="/login">      
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Back To Login
        </button>
      </Link>
    </>
  );
}
  

export default Home;