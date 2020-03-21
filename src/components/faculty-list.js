import React, { Component } from "react";
import FacultyCard from './faculty-card';

class FacultyList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const facultyData = this.props.facultyData;
    const area = this.props.area;
  return(
    <div className="container">
      {facultyData.map(function(object, index){
        return (( object.Area === area ) || (area === 'All') ?
           <FacultyCard
            name={object.Name}
            area={object.Area}
            location = {object.Location}
            papers = {object['Research Papers']}
            timings = {object['Free Timings']}
            key={index}
            sno={index+1}/> :
           <div key={index}></div>)
        })
      }
    </div>
    );
  }
}

export default FacultyList;
