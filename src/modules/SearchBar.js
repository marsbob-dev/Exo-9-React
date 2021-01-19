import React, {Component} from 'react';
import '../bootstrap.css'
import './searchBar.css'

class SearchBar extends Component {

    render(){
      return (
        <div className="d-flex justify-content-end col-6 align-items-center">
            <span className="text-white">Search :</span>
            <input className="mx-4" type="text"/>
            <button className="mr-5 bg-success btn text-white p-1">Go</button>
        </div>
      )
    }
  }
  
  export default SearchBar;