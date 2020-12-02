import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';


function Comp(){
  
    return(
        <section id="footer" class="wrapper">
            <div class="title">Contact</div>
            <div class="container">
              <header class="style1">
                <h2>Looking to schedule an interview?</h2>
                <p>
                  If you are looking at this paragraph, I would first like to 
                  sincerely thank you for taking the time to view this page. 
                  Visiting this site may mean you are interested in contacting 
                  me about future employment, the below contact form may assist you in doing so. Alternatively, I have listed
                  additional contact information for use at your leisure. Thank you
                  again.
        
                </p>
                <h2>~ Quincy Jones</h2>
              </header>
              <div class="row">
                <div class="col-6 col-12-medium">

                  
                    <section>
                      <form method="post" action="#">
                        <div class="row gtr-50">
                          <div class="col-6 col-12-small">
                            <input type="text" name="name" id="contact-name" placeholder="Name" />
                          </div>
                          <div class="col-6 col-12-small">
                            <input type="text" name="email" id="contact-email" placeholder="Email" />
                          </div>
                          <div class="col-12">
                            <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                          </div>
                          <div class="col-12">
                            <ul class="actions">
                              <li><input type="submit" class="style1" value="Send" /></li>
                              <li><input type="reset" class="style2" value="Reset" /></li>
                            </ul>
                          </div>
                        </div>
                      </form>
                    </section>

                </div>
                <div class="col-6 col-12-medium">
                    <section class="feature-list small">
                        <div class="row">
                            <div class="col-6 col-12-small">
                            {/* <section>
                                <h3 class="icon solid fa-envelope">Email</h3>
                                <p>
                                  <a href="qajonesx47@gmail.com">qajonesx47@gmail.com</a>
                                </p>
                              </section> */}
    
                            </div>
                            <div class="col-6 col-12-small">
                              <section>
                                <h3 class="icon solid fa-comment">Social</h3>
                                <p>
                                  <a href="https://www.linkedin.com/in/don-quincy-jones/">linkedin</a><br />
                                  <a href="https://github.com/doncibo">github</a>
                                </p>
                              </section>
                            </div>
                            <div class="col-6 col-12-small">
                                {/* <section>
                                    <h3 class="icon solid fa-home">Mailing Address</h3>
                                    <p>
                                        Untitled Corp<br />
                                        1234 Somewhere Rd<br />
                                        Nashville, TN 00000
                                    </p>
                                </section> */}
                            </div>
                            <div class="col-6 col-12-small">
                              {/* <section>
                                <h3 class="icon solid fa-phone">Phone</h3>
                                <p>
                                  (000) 555-0000
                                </p>
                              </section> */}
                            </div>
                        </div>
                    </section>
                </div>
                </div>
                <div id="copyright">
                    <ul>
                        <li>DonCibo</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Comp
