import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';
import resume from '../documents/jones_quincy_resume.docx'

function Comp(){
  
    return(
        <section id="intro" class="wrapper style1">
            <div class="title">Resume</div>
            <div class="container">
                <p class="style1">Download my resume below...</p>
                    <a href={resume} download>Resume</a><br class="mobile-hide" />
                {/* <p class="style2">
    
                </p> */}
                {/* <p class="style3">It's <strong>responsive</strong>, built on <strong>HTML5</strong> and <strong>CSS3</strong>, and released for
                    free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0 license</a>, so use it for any of
                    your personal or commercial projects &ndash; just be sure to credit us!</p>
                <ul class="actions">
                  <li><a href="#" class="button style3 large">Proceed</a></li>
                </ul> */}
            </div>
        </section>
    )
}

export default Comp
