import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/dist/jquery'

import './index.css';

import PageOne from './components/pageOne';

class ShoppingCart extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <PageOne></PageOne>
    );
  }
}

ReactDOM.render(<ShoppingCart></ShoppingCart>,document.getElementById('root'));
