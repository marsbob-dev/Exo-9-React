import React, {Component} from 'react';
import '../bootstrap.css'
import './body.css'
import './Header'
import Header from './Header';
import Article from './Article'
import Footer from './Footer'

class Body extends Component {

    render(){
      return (
        <div>
          <Header></Header>
          <Article></Article>
          <Article></Article>
          <Footer></Footer>
        </div>
      )
    }
  }
  
  export default Body;