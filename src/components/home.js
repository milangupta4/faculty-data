import React, { Component } from "react";
import FacultyList from "./faculty-list";

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {area: 'All'};
      this.setArea = this.setArea.bind(this);
    }
    setArea(area, e){
      e.preventDefault();
      this.setState({area: area });
    }
    render(){
    const facultyData = this.props.facultyData;
    const areas = ["All", "Marketing", "Finance", "Operations"];

    return (
        <div>
          <div className="container">
            <h1>Welcome to Faculty information page</h1>
          </div>
          <div className="container">
            <h2>Areas</h2>
            {areas.map((area, index)=>{
              return (
              <button
                key={index}
                onClick = {(e)=> this.setArea(area, e)}
                className={this.state.area === area? 'active': ''}
              >
                {area}
              </button>
              );
            })}
          </div>
          <FacultyList
            area={this.state.area}
            facultyData={facultyData}
            />
        </div>
      );
  }
}

export default Home;
