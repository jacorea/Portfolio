import React, { Component } from 'react';
import { Card, Parallax, Slide, Slider, Tab, Tabs } from 'react-materialize';
import Blue2 from '../../Assets/img/blue2.jpeg';
import Blue from '../../Assets/img/blueBackground.jpeg';
import BlueStripped from '../../Assets/img/blue_stripped.jpeg';
import headShot from '../../Assets/img/JonathanCorea_headshot.jpg';
//Imported Images
import Marina from '../../Assets/img/marina.png';
import onTask from '../../Assets/img/onTask_square.jpg';
import penNote from '../../Assets/img/pen&note_square.png';
import driveAway from '../../Assets/img/DriveAway-1.png';
import calculator from '../../Assets/img/calculator.PNG';








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
    
    
    
    <section className="indigo darken-4 section" id="about">
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
          <div className="about">
          <img className=" circle responsive-img" src={headShot} />
          <h5>Bio</h5>
          <p>I'm a web designer/ developer located in beautiful sunny San Diego. Dedicated to building and optimizing web applications with intuitive user experience.</p>
          </div>
        </div>
        <div className="col s12 l2 offset-l1">
          <i className="large material-icons prefix teal-text text-lighten-2 col offset-l2">devices_other</i>
          <h3 id="about" className="about">Dynamic</h3>
          <p className="center-align about">Customizable to all devices</p>
        </div>
        <div className="row">
          <div className="col s12 l2 offset-l1">
          <i className="large material-icons prefix prefix yellow-text text-lighten-3 col offset-l1">lightbulb_outline</i>
            <h3 id="about"className="about">Intuitive</h3>
            <p className="center-align" className="about">Easy user experience/Interface</p>
          </div>
          <div className="col s12 l2 offset-l1">
            <i className="large material-icons prefix cyan-text text-lighten-4 col offset-l2">layers</i>
            <h3 id="about" className="about">Responsive</h3>
            <p className="center-align about">Lively & Interactive Pages</p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="white darken-4 section" id="portfolio">
    <div className="row">
      <div className="col s12 m8 l4 offset-l5">
        <h1 className="indigo-text text-darken-4">PROJECTS</h1>
      </div>
      <div className="col s12 m8 l5 offset-l4">
        <p><hr/></p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l4 offset-l2" >
        <h2 className="indigo-text text-darken-4">Description</h2>
        <p>Take a look at the following to-do-list and note taking apps completed with ReactJS and RubyonRails framework, respectively.</p>

      </div>
      <div className="col s12 l3 offset-l1">
        <Tabs>
            <Tab title="To-do-List" active>
              <h5 className='indigo-text text-darken-4'>ReactJS</h5>
              <p>Never be late on an assignment or task. Create own toDo tasks and cross out when finished. It's as simple as that. </p>
            </Tab>
            <Tab id="valet" title="Note&Pen">
              <h5 className='indigo-text text-darken-4'>Rails</h5>
              <p>Whether capturing an artistic thought for the day or noting an idea that will make a world of a difference one day.</p>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="container"> 
        <div className="row">
        <div className="col s12 l5">
            <div className="card">
              <div className="card-image">
                <img src={onTask} alt=""/>
              </div>
              <div className="card-content">
                <span className="card-title">To-do-List</span>
                <p>Inspired from TodoIst task list. Never miss a task or assignment with this ReactJS app. Add tasks and mark them as completed once finished.</p>
              </div>
              <div className="card-action">
                <a href="https://to-do-list-jcorea.herokuapp.com/">view more</a>
              </div>
            </div>
          </div>
        <div className="col s12 l5 offset-l2">
            <div className="card">
              <div className="card-image">
                <img src={calculator} alt=""/>
              </div>
              <div className="card-content">
                <span className="card-title">Calculator</span>
                <p>This is a simple calcultor app created in React with basic utilities such as addition, substraction, addition, and multiplication utilizing mathjs.</p>
              </div>
              <div className="card-action">
                <a href="https://simplecalc-jcorea.herokuapp.com/">view more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
      <div className="col s12 l5">
          <div className="card">
            <div className="card-image">
              <img src={driveAway} alt=""/>
            </div>
            <div className="card-content">
              <span className="card-title">DriveAway</span>
              <p>It's a valet app created in Reactjs frontend and rails backend utilizing Google Maps API.</p>
            </div>
            <div className="card-action">
              <a href="https://vast-wildwood-28622.herokuapp.com/">view more</a>
            </div>
          </div>
        </div>
        <div className="col s12 l5 offset-l2">
          <div className="card">
            <div className="card-image">
              <img src={penNote} alt=""/>
            </div>
            <div className="card-content">
              <span className="card-title">Note&Pen</span>
              <p>Similar to Evernote's note taking. Take you mouse and keys on a new adventure.</p>
            </div>
            <div className="card-action">
              <a href="https://note-pen.herokuapp.com/">view more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
       

          <footer className="page-footer grey darken-3 Scrollspy" id="contact">
          <div>
            <div className="row">
              <div className="col s12 l6 offset-l3">
                <h2 className="white-text center-align">Get in Touch</h2>
            <div className="row">
              <div className="col s12 l5">
                <h3 className="grey-text text-lighten-2">Contact</h3>
                <p className="grey-text text-lighten-2">Want to work together?</p>
                <p>If you have a project in mind to get started and you are interested in partnering up. I'm currently available for freelance work.</p>
                <br />
                
                <p>Let's get in touch!</p>
              </div>
              <div className="col s12 l5 offset-l2">
                <br/>
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
                <h4 className="grey-text text-ligthen-3 col offset-l4">Social Icons</h4>
              </div>
          </div>
          </div>
          <div className="container icon-flex wrap row">
            <div className="col s12 l1 offset-l6 pull-l1" >
              <a href="https://www.linkedin.com/in/jon-corea/">
                <div className="flex-icon" id="icon-linkedIn">
                  <span style={{fontSize: "2em"}}><i className="fab fa-linkedin grey-text text-lighten-2"></i></span>
                </div>
              </a>
            </div>
            <div className="col s12 l1 pull-l1">
              <a href="https://github.com/jacorea">
                <div className="flex-icon" id="icon-linkedIn">
                  <span style={{fontSize: "2em"}}><i className="fab fa-github-square grey-text text-lighten-2"></i></span>
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