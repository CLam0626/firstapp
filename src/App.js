import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutImage from "./images/about-us-vector.png";
import BlogImage from "./images/macbook-pro.jpg";
import ContactImage from "./images/contact-us.jpg";

const styles= {
  backgroundColor: '#86e1f7', 
  transition: 'all 0.2s ease-in',
  opacity: .75
}

class App extends Component {
  render() {
    return (
      <div className='mainCat' >
        <Category style={{width: '25%', height: '100%'}} 
            title='ABOUT' background={AboutImage} position='-73px 0'/>
        
        <Category style={{width: '25%', height: '100%'}} 
            title='BLOG' background={BlogImage} position='-300px 0'/>
        
        <Category style={{width: '25%', height: '100%'}} 
            title='CONTACT' background={ContactImage} position='-30px 0'/>
      </div>
      
    );
  }
}

class Category extends Component {
  constructor(){
    super();
    this.state= {
        height: 0,
        marginTop: 500,
        visibility: 'hidden'
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver() {
    this.setState({
      height: 50,
      marginTop: 450,
      visibility: 'visible' 
    });
  }

  handleMouseLeave() {
    this.setState({
      height: 0,
      marginTop: 500,
      visibility: 'hidden' 
    });
  }

    render() {
      return(
        <div className='catName' style={{...this.props.style, background: `url(${this.props.background}) ${this.props.position} white no-repeat`,  backgroundSize: 'cover', overflow: 'hidden'}} 
              onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
            <div style={{...styles, height: this.state.height, marginTop: this.state.marginTop, visibility: this.state.visibility}}>
                <h2 className='catTitle'>{this.props.title}</h2>
            </div>
        </div>
      );
    }
}

export default App;
