import React, {Component} from 'react';
import '../bootstrap.css'
import './nav.css'
import SearchBar from './SearchBar'

class Nav extends Component {

    render(){
      return (
        <div className="row m-0 p-0">
            <div className="col-6 my-3">
            <button className="ml-5 text-white border-success btn">
                Link 1
            </button>
            <button className="mx-4 text-white border-success btn">
                Link 2
            </button>
            <button className="text-white border-success btn">
                Link 3
            </button>
            </div>
            <SearchBar></SearchBar>
        </div>
      )
    }
  }
  
  export default Nav;