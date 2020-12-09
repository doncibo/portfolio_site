import React from 'react';
// import HomeLogo from '../../style/Home'
import DownloadLink from "react-download-link";
import profile from "../documents/20201111_152616.jpg"
import { Link } from 'react-router-dom';


function Comp(){
    
    return(
        <section id="main" class="wrapper style2">
          <div class="title">About</div>
          <div class="container">
              {/* <a href="#" class="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a> */}
            {/* <!-- Features --> */}
              <section id="features">
                <header class="style1">
                  {/* <h2>Dolor consequat feugiat amet veroeros</h2>
                  <p>Feugiat dolor nullam orci pretium phasellus justo</p> */}
                </header>
                <div class="feature-list">
                  <div class="row">
                    <div class="col-6 col-12-medium">
                      <img id="profile-pic" src={profile} alt="Quincy"></img>
                      {/* <section>
                        <h3 class="icon fa-comment">Mattis velit diam vulputate</h3>
                        <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                      </section> */}
                    </div>
                    <div class="col-6 col-12-medium">
                      <p>I'm chiefly characterized by my persistence, a keen ability to adapt, and a natural ability to convey my thoughts. Programming, for me, is an excellent channel for my creativity, and passion for problem solving.</p>

                      <p>My preferred languages so far are JavaScript and Python, but I am always looking for more to add to my coding arsenal. I am also familiar with other tech, including Flask, Express, Node.js, WSL, React.js, SQL, SQLAlchemy, Sequelize, Postgres, Postman, Docker and much more than I can say without coming off as a laundry list.</p>

                      <p>I am one of the few people I know that enjoy strategy games, primarily because of the rewarding experience of watching a culmination of planning and quick thinking play out into a fluid victory. I get a similar feeling from software engineering. Turning considerate planning into a functioning platform that has the potential to be valued by the world over makes me ecstatic about software engineering. I can't wait to show my skills to the world</p>
                      {/* <section>
                        <h3 class="icon solid fa-sync">Lorem ipsum dolor sit veroeros</h3>
                        <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                      </section> */}
                    </div>
                    {/* <div class="col-6 col-12-medium">
                      <section>
                        <h3 class="icon fa-image">Pretium phasellus justo lorem</h3>
                        <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                      </section>
                    </div>
                    <div class="col-6 col-12-medium">
                      <section>
                        <h3 class="icon solid fa-cog">Tempus sed pretium orci</h3>
                        <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                      </section>
                    </div>
                    <div class="col-6 col-12-medium">
                      <section>
                        <h3 class="icon solid fa-wrench">Aliquam consequat et feugiat</h3>
                        <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                      </section>
                    </div>
                    <div class="col-6 col-12-medium">
                      <section>
                        <h3 class="icon solid fa-check">Dolore laoreet aliquam mattis</h3>
                        <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                      </section>
                    </div> */}
                  </div>
                </div>
                {/* <ul class="actions special">
                  <li><a href="#" class="button style1 large">Get Started</a></li>
                  <li><a href="#" class="button style2 large">More Info</a></li>
                </ul> */}
              </section>
          </div>
        </section>
    )
}

export default Comp
