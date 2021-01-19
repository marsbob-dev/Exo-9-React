import React, {Component} from 'react';
import '../bootstrap.css'
import './header.css'
import Nav from './Nav'

class Header extends Component {

    render(){
      return (
        <div className="border-bottom border-success">
            <Nav></Nav>
        </div>
      )
    }
  }
  
  export default Header;