import React, { Component } from 'react';
const PropCalls = (props) => {
    return (
      <div>
      <h1 >{props.title}</h1>
      <img src={props.img}/>
       <p >{props.desc}</p>
       <p> {props.skills}</p>
       <p> {props.type}</p>
     </div>
    );
  };
  export default PropCalls;