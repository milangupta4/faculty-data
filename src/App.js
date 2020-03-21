import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Home from './components/home';
import { facultyData } from './data/faculty_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {facultyData: facultyData}
  }

  render() {
    return (
      <div className="App">
        <Home facultyData={this.state.facultyData}/>
      </div>
    );
  }
}

export default hot(module)(App);
