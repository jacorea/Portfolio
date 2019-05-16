import React, { Component } from 'react';
import {Card, Col, Row, Parallax, Tabs, Tab, Checkbox, DatePicker, } from 'react-materialize'


//Imported Components
import HorizontalBarChart from '../Chart'


//Imported Images
import Bridge from '../../Assets/img/bridge.png'
import Marina from '../../Assets/img/marina.png'
import Fitbit from '../../Assets/img/fitbit.png'
import Space from '../../Assets/img/Mac_WallPaper.jpg'

class Home extends Component {
  render() {
    return(
    <div>

    
    <section className="container section" id="about">
      <div className="row">
        <div className="col s12 l4 offset-l5">
          <h1 className="indigo-text text-darken-4">¡Hola!</h1>
          <p>I'm a web designer/ developer located in beautiful sunny San Diego. Dedicated to building and optimizing web applications with intuitive user experience.</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l2 offset-l1">
          <i className="large material-icons prefix">important_devices</i>
          <h3>Dynamic</h3>
          <p className="center-align">Customizable to all devices</p>
        </div>
        <div className="col s12 l2 offset-l2">
          <span style={{fontSize: "4em"}}><i className="fas fa-arrow-circle-up"></i></span>
          <h3>Intuitive</h3>
          <p className="center-align">Easy user experience/Interface</p>
        </div>
        <div className="col s12 l2 offset-l3">
          <i className="large material-icons prefix">mood</i>
          <h3>Responsive</h3>
          <p className="center-align">Lively & Interactive Pages</p>
        </div>
      </div>

    </section>

      <div className="prallax-container">
        <Parallax imageSrc={Marina}/>
      </div>
    
   
    <section className="container section Scrollspy" id="portfolio">
          <div className="row">
            <div className="col s12 l4 offset-l2" >
              <h2 className="indigo-text text-darken-4">What I Do</h2>
              <p>
                <strong>Valet Service</strong> is proud to work with local businesses in your area. Our work consists of close collaboration between local businesses and customers aim to provide guaranteed customer satisfaction upon each visit.
              </p>

            </div>
            <div className="col s12 l3 offset-l1">
              <Tabs>
                  <Tab title="Customer" active>
                    <h5 className='indigo-text text-darken-4'>CUSTOMER</h5>
                    <p>Here is how it works - </p>
                    <p>Download the app.  With the app you can tell us where you are going so that we will be waiting for you.  Call your valet, pay your fare, and tip them all at the push a button. </p>
                  </Tab>
                  <Tab id="valet" title="Valet">
                    <h5 className='indigo-text text-darken-4'>VALET</h5>
                    <p>Raise the bar with valet services that allow you to develop stronger and mutually productive relationships with your clients.  Use our reports to track your incoming revenues, and manage day-to-day operations through a smart phone or tablet.</p>
                  </Tab>
                </Tabs>
                </div>
              </div>
        </section>
   

        <Parallax imageSrc={Marina}/>
        <section className="section container" id="contact">
            <div className="row">
              <div className="col s12 l5">
                <h2 className="indigo-text text-darken-4">Contact</h2>
                <p className="indigo-text text-lighten-2">Want to work together?</p>
                <p>If you have a project in mind to get started and you are interested in partnering up. I'm currently available for freelance work.</p>
                <br />
                
                <p>Let's get in touch!</p>
              </div>
              <div className="col s12 l5 offset-l2">
                <form action="#">
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input type="email" id="email"/>
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">phone</i>
                    <input type="text" id="phone" className="phone"/>
                    <label htmlFor="phone">Your Phone Number</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">message</i>
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                  <div className="input-field right">
                    <button className="btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <footer className="page-footer grey darken-3" >
          <div className="container" >
            <div className="row">
              <div className="col s12 l6">
                <h5 className="white-text">Get in Touch</h5>
                <p className="grey-text text-ligthen-3">I am currently available for freelance work or learn more about what I do.</p>
              </div>
              <div className="col s12 l4 offset-l2">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a href="#" className="grey-text text-ligthen-3">Github</a></li>
                  <li><a href="#" className="grey-text text-ligthen-3">LinkedIn</a></li>
                </ul>
            </div>
          </div>
          </div>
          <div className="footer-copyright grey darken-4">
            <div className="container center-align">
              &copy;2019 Valet Service
            </div>
          </div>
        </footer>
    </div>
    )
  }
}


export default Home;