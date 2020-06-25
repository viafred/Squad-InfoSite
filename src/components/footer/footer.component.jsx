import React from 'react';

import logo from '../../assets/img/logo.png';

import './footer.styles.scss'

const FooterComponent = () => {
  return (
      <div id='footer'>
        <div className="img-container">
          <a href='/' id='squad-logo'>
            <img src={logo} alt='squad logo'/>
          </a>
        </div>
        <div id='links'>
          <a href='/' id='text-links'>
            <div>About</div>
          </a>
          <a href='/' id='text-links'>
            <div>FAQ</div>
          </a>
          <a href='/' id='text-links'>
            <div>Contact Us</div>
          </a>
          <a href='/' id='text-links'>
            <div>Help</div>
          </a>
          <a href='/' id='text-links'>
            <div>Terms of Service</div>
          </a>
        </div>
        <div id='copyright' pullright="true">
          <p>
            © 2020 All Rights Reserved.
          </p>
        </div>
      </div>
  )
};

export default FooterComponent;
