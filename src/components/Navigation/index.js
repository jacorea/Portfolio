import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'


import * as ROUTES from '../../constants/routes'
class Navigation extends Component {
    render() {
        return(
            <nav>
            <Navbar alignLinks="right center" className="indigo darken-4">
               
                <NavItem href="#about">About</NavItem>
                <NavItem href="#portfolio">Portfolio</NavItem>
                <NavItem href="#contact">Contact</NavItem>               
        </Navbar>
        </nav>
        )
    }
    
   
}

export default Navigation;