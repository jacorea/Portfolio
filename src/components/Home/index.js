import React, { Component } from 'react';
import {Slider,Slide,Card, Carousel, Col, Row, Parallax, Tabs, Tab } from 'react-materialize'

//Move Email section to footer


//Imported Components
import HorizontalBarChart from '../Chart'


//Imported Images
import Marina from '../../Assets/img/marina.png'
import Blue from '../../Assets/img/blueBackground.jpeg'
import Blue2 from '../../Assets/img/blue2.jpeg'
import BlueStripped from '../../Assets/img/blue_stripped.jpeg'
import headShot from '../../Assets/img/JonathanCorea_headshot.jpg'





class Home extends Component {
  render() {
    return(
    <div className="body">
    <section> 
      <Slider>
        <Slide>
            <img src={Blue} />
          <div className="caption center-align">
            <h3>
              WELCOME
            </h3>
            <h5 className="light grey-text text-lighten-3">
            I'm <span className="light grey-text text-lighten 3"><strong>Jonathan Corea</strong></span>
            </h5>
          </div>
        </Slide>
        <Slide>
            <img src={Blue2} />
          <div className="caption center-align">
            <h3>
              I'm a full-stack web developer
            </h3>
            <h5 className="light grey-text text-lighten-3">
            located in beautiful, sunny <span className = "light yellow-text">San Diego</span>
            </h5>
          </div>
        </Slide>  
        <Slide>
            <img src={BlueStripped} />
          <div className="caption center-align">
            <h3>
              This is my Portfolio
            </h3>
            <h5 className="light grey-text text-lighten-3">
            <span className="text-light blue blue-darken-4">Enjoy.</span>
            </h5>
          </div>
        </Slide>
      </Slider>
    </section>
    
    
    
    <section className="blue darken-4 section" id="about">
      <div className="row">
        <div className="col s12 m8 l4 offset-l5">
          <h1 className="white-text text-darken-4">ABOUT</h1>
        </div>
        <div className="col s12 m8 l4 offset-l4">
          <p><hr/></p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m8 l3 offset-l1">
          <Card>
          <img className="responsive-img" src={headShot} />
          <h5>Bio</h5>
          <p>I'm a web designer/ developer located in beautiful sunny San Diego. Dedicated to building and optimizing web applications with intuitive user experience.</p>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l2 offset-l2">
          <i className="large material-icons prefix teal-text text-lighten-2 col offset-l2">devices_other</i>
          <h3 id="about">Dynamic</h3>
          <p className="center-align">Customizable to all devices</p>
        </div>
        <div className="col s12 l2 offset-l1">
        <i className="large material-icons prefix prefix yellow-text text-lighten-3 col offset-l1">lightbulb_outline</i>
          <h3 id="about">Intuitive</h3>
          <p className="center-align">Easy user experience/Interface</p>
        </div>
        <div className="col s12 l2 offset-l1">
          <i className="large material-icons prefix cyan-text text-lighten-4 col offset-l2">layers</i>
          <h3 id="about">Responsive</h3>
          <p className="center-align">Lively & Interactive Pages</p>
        </div>
      </div>

    </section>

      <hr />
    
   
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
          <div className="container center-align" >
            <div className="row">
              <div className="col s12 l6 offset-l3">
                <h5 className="white-text">Get in Touch</h5>
                <p className="grey-text text-ligthen-3">I am currently available for freelance work or learn more about what I do.</p>
              </div>
          </div>
          </div>
          <div className="container icon-flex wrap row">
            <div className="col s12 l1 offset-l6 pull-l1" >
              <a href="https://www.linkedin.com/in/jon-corea/">
                <div className="flex-icon" id="icon-linkedIn">
                  <span style={{fontSize: "2em"}}><i class="fab fa-linkedin"></i></span>
                </div>
              </a>
            </div>
            <div className="col s12 l1 pull-l1">
              <a href="https://github.com/jacorea">
                <div className="flex-icon" id="icon-linkedIn">
                  <span style={{fontSize: "2em"}}><i class="fab fa-github-square"></i></span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="footer-copyright grey darken-4">
            <div className="container center-align">
              Jonathan Corea &copy; 2019
            </div>
          </div>
        </footer>
    </div>
    )
  }
}


export default Home;