import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';
import slumblr from '../documents/slumblr_screen.png'
import uptrade from '../documents/uptrade_screen.png'
import whatforlunch from '../documents/whatforlunch_screen.png'

function Comp(){
  
    return(
        <section id="highlights" class="wrapper style3">
            <div class="title">Recent Work</div>
            <div class="container">
              <div class="row aln-center">
                <div class="col-4 col-12-medium">
                  <section class="highlight">
                    <a href="https://slumblr.herokuapp.com/" class="image featured"><img src={slumblr} alt="" /></a>
                    <h3><a href="https://slumblr.herokuapp.com/">Slumblr</a></h3>
                    {/* <p></p> */}
                    <ul class="actions">
                      <li><a href="https://github.com/doncibo/slumblr" class="button style1">Repo Link</a></li>
                    </ul>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section class="highlight">
                    <a href="https://up-trade.herokuapp.com/" class="image featured"><img src={uptrade} alt="" /></a>
                    <h3><a href="https://up-trade.herokuapp.com/">Uptrade</a></h3>
                    {/* <p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p> */}
                    <ul class="actions">
                      <li><a href="https://github.com/doncibo/uptrade" class="button style1">Repo Link</a></li>
                    </ul>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section class="highlight">
                    <a href="https://aawhatsforlunch.herokuapp.com/" class="image featured"><img src={whatforlunch} alt="" /></a>
                    <h3><a href="https://aawhatsforlunch.herokuapp.com/">WhatsForLunch</a></h3>
                    {/* <p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p> */}
                    <ul class="actions">
                      <li><a href="https://github.com/drblack8/whatsforlunch" class="button style1">Repo Link</a></li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Comp
