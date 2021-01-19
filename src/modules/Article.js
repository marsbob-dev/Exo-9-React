import React, {Component} from 'react';
import '../bootstrap.css'
import './article.css'

class Article extends Component {

    render(){
      return (
        <div>
          <div className="row m-0">
            <div className="col-6 d-flex justify-content-center mt-5">
             <img className="w-50" src="./say_what_again.jpg" alt=""/>               
            </div>
            <div className="col-6 mt-5 text-white d-flex align-items-center">
                <div className="col">
                  <div className=" w-50 ">
                  <h2 className="text-success">Mon premier article</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima nihil cum? Natus vel, numquam nesciunt quam cum totam autem qui et ullam perferendis ducimus excepturi molestiae laudantium sequi minima aspernatur nisi dolorum sapiente labore itaque doloribus? Enim temporibus similique blanditiis aliquid unde accusantium maxime nobis provident neque sint! Et.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Article;