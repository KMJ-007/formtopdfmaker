import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';

import React, { Component } from 'react';

export default class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.pdfMaker=this.pdfMaker.bind(this);
  }
  pdfMaker = () =>{
    var doc = new jsPDF('portrait','px','a4','false');
    
    // console.log(this.state.value);.
    
    doc.text(50,40,this.state.value);
    doc.save("test.pdf");
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render(){
  return (
    <div className="App">
    hello <br/>
    <form >
        <label>
          name
          <input type="name" className="content"value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    <button onClick={this.pdfMaker}>Download pdf</button>
    </div>
  );
}

}
 