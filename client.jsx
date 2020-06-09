import React from 'react'
import { render } from 'react-dom'
import Display from './components/Display'

render(
  <div>
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>

      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/">Home</a></div>
      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/about-us">About Us</a></div>
      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/our-programs">Our Programs</a></div>
      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/our-team-1">Our Team</a></div>
      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/news-events">News + Events</a></div>
      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/support-our-work">Donate</a></div>
      <div id="navFormat"><a href="https://www.openavenuesfoundation.org/contact-us">Contact Us</a></div>

    </div>

    <div className="headerFlex">
      <span style={{ fontSize: '30px' }} onClick="openNav()" className="hamburg">&#9776;</span>

      <img
        src="./images/NEW-OpenAvenueFOUNDATION-Logo-FullColor (1).png"
        alt="Open Avenues Foundation "
        style={{ width: '400px', height: '75px' }}
        className="openAveLogo" />
      <div className="headerSocialWidth">
        <img alt="" src="./images/instagram-brands.svg" className="socialMedia" />

        <img alt="" src="./images/facebook-brands.svg" className="socialMedia" />

        <img alt="" src="./images/twitter-brands.svg" className="socialMedia" />

        <img alt="" src="./images/search-solid.svg" className="socialMedia verticalSeparator" />
      </div>
    </div>

    <div className="titleBox">
      <div>
        <p>
          Find out how much you could save with
          <span className="bold"> Open Avenues</span>
        </p>
      </div>
    </div>

    <div className="betweenTitleAndForm">
      <p> Give us some information about your employee and company.</p>
    </div>

    <Display />


    <footer className="footer">
      <div className="footer-text">
        Connect with us.
      </div>
      <div className="contact-button">
        CONTACT US
      </div>

    </footer>

  </div>,
  document.getElementById('root'),
)
