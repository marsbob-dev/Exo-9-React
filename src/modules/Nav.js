import React, {Component} from 'react';
import '../bootstrap.css'
import './nav.css'
import SearchBar from './SearchBar'

class Nav extends Component {

  onClic1 = () => {
    console.log("Accueil")
  }
  onMouseOver1 = () => {
    console.log("Galerie")
  }
  onDoubleClic1 = () => {
    console.log("Contact")
  }
  

  render(){
      return (
        <div className="row m-0 p-0">
            <div className="col-6 my-3">
            <button onClick={this.onClic1} className="ml-5 text-white border-success btn">
                Link 1
            </button>
            <button onMouseOver={this.onMouseOver1} className="mx-4 text-white border-success btn">
                Link 2
            </button>
            <button onDoubleClick={this.onDoubleClic1} className="text-white border-success btn">
                Link 3
            </button>
            </div>
            <SearchBar></SearchBar>
        </div>
      )
    }
  }
  
  export default Nav;