import React from 'react';

export default function FacultyCard( { name, area, location, papers, timings, sno } ) {
  return (
    <div className="faculty-card">
      <h4>{name}</h4>
      <p>{area}</p>
      <p>{location}</p>
      <p>Research Papers: {papers}</p>
      <p>Free Timings: {timings}</p>
    </div>
    );
}
