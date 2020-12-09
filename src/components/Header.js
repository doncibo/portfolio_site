import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';
import '../index.css'

function Comp(){
  
    return(
        <section id="header" class="wrapper">
            <div id="logo">        
              <h1><a href="index.html">Quincy Jones</a></h1>
              <p>Full Stack Software Engineer | Understate, and overachieve... | Node.js, JavaScript, Python, HTML, CSS</p>
            </div>

            {/* <nav id="nav">
              <ul>
                <li><a href="#highlights">Recent Work</a></li>
                <li id='about'>
                  <a href="#intro">Resume</a>
                  <ul>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Music/Misc</a></li>
                  </ul>
                </li>
                <li class="current"><a href="#footer">Contact</a></li>
                <li><a href="https://www.linkedin.com/in/don-quincy-jones/">linkedin</a></li>
                <li><a href="https://github.com/doncibo">Github</a></li>
              </ul>
            </nav> */}

        </section>
    )
}

export default Comp
