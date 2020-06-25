import React from 'react';
import what from '../../assets/img/whatissquad.png';
import unique from '../../assets/img/unique.png';
import benefits from '../../assets/img/member-insights 1.png';
import earnings from '../../assets/img/earnings-Ipad 1.png';
import aleksandra from '../../assets/img/aleksandra.png';
import fred from '../../assets/img/fred.png';
import veronica from '../../assets/img/veronica.png';
import eileen from '../../assets/img/eileen.png';
import alexandria from '../../assets/img/alexandria.png';
import zarin from '../../assets/img/zarin.png';

import './content.styles.scss'
const ContentComponent = () => {
  
  return (
    <div className="content-wrapper">
      <div className="what-container" id="what">
        <div className="content">
          <div className="img-wrapper">
            <img src={what} alt='What is Squad mockup' />
          </div>
          <div className="text-container">
            <h1>What is Squad?</h1>
            <p>Squad is the first Gen Z Insight, Research & Feedback solution designed specifically for Fashion & Streetwear Brands & Retailers.</p>
          </div>
        </div>
        <div className="polygon"></div>
      </div>
      <div className="unique-container">
        <div className="content">
            <div className="text-container">
              <h1>What makes Squad unique?</h1>
              <p>Squad is a community comprised of real consumers that willingly share who they are and what they buy.</p>
            </div>
            <div className="img-wrapper">
              <img src={unique} alt='What makes Squad unique' />
            </div>
          </div>
          <div className="polygon1"></div>
      </div>
      <div className="subscriber-container">
        <div className="content">
          <div className="img-wrapper">
            <img src={benefits} alt='Subscriber benefits' />
          </div>
          <div className="text-container">
            <h1>Subscriber Benefits</h1>
          <p>As a Squad subscriber you get real time access to the purchase (brand, category and product) and demographic (age, gender, ethnography, etc) data of every Squad member including data science driven insights & intelligence invisible to the naked eye.</p>
          <p>Squad subscribers can also solicit feedback from any Member or group of Members leveraging any combination of the consumption, preference or demographic data points we have on that Member or groups of Members. Gen Subscribers can leverage our pre-built Gen-Z optimized feedback formats. Our services team can also design & development custom feedback solutions.</p>
          </div>
        </div>
        <div className="polygon2"></div>
      </div>
      <div className="community-container">
        <div className="content">
          <div className="text-container">
            <h1>Community</h1>
            <p>At Squad we are serious about community. Not only do 50% of subscriber fee’s go to our members, we place the trust and safety of our Members as our highest priority.</p>
          </div>
          <div className="img-wrapper">
            <img src={earnings} alt='Subscriber benefits' />
          </div>
        </div>
        <div className="polygon3"></div>
      </div>
      <div className="team-container">
        <div className="content">
          <h1>Meet the Team</h1>
          <table>
            <tr>
              <td>
                <img src={aleksandra} alt='Aleksandra' />
                <h3>Aleksandra Dooley</h3>
                <p>Software Engineer</p>
              </td>
              <td>
                <img src={veronica} alt='Veronica' />
                <h3>Veronica Nisenbaum</h3>
                <p>Sr. Software Engineer</p>
              </td>
              <td>
                <img src={alexandria} alt='Alexandria' />
                <h3>Alexandria Owens</h3>
                <p>Sr. UX Designer</p>
              </td>
            </tr>
            <tr>
              <td>
                <img src={zarin} alt='Zarin' />
                <h3>Zarin Shahab</h3>
                <p>Software Engineer</p>
              </td>
              <td>
                <img src={eileen} alt='Eileen' />
                <h3>Eileen Zhang</h3>
                <p>UX/UI Desinger</p>
              </td>
              <td>
                <img src={fred} alt='fred' />
                <h3>Frederick Chieux</h3>
                <p>CEO</p>
                <p>fred@myteammysquad.com</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
};

export default ContentComponent;