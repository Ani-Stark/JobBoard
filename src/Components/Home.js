import React from "react";
import Login from "./Login";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";


function Home() {
    
  return (
    <>
      <nav>
        JOB BOARD
      </nav>
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
                  <span class="category">Photoshop</span>
                
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
                  <span class="category">Photoshop</span>
            
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
                  <span class="category">Photoshop</span>
                  
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
                  <span class="category">Photoshop</span>
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