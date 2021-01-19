import React, {Component} from 'react';
import '../bootstrap.css'
import './footer.css'

class Footer extends Component {

    render(){
      return (
        <div className="marginTop">
          <div className="bg-dark">
            <p className="p-2 text-white text-center">Copyright Samuel L. Jackson</p>
          </div>
        </div>
      )
    }
  }
  
  export default Footer;