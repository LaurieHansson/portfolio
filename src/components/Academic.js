import React, { Component } from 'react';
import { Jumbotron, Button, Image,Col,Row,Grid} from 'react-bootstrap';
import Project from "./PropCalls";

// set desired states in constructor
// change the state with setState
class Intro extends Component {
	render() {
		return (
        <div className="academics">
            <Grid>
            <Row className="show-grid">
                   <Col  xs={12} md={4} lg={6}>
                   <Project 
              title="USER EXPERIENCE AND INTERFACE MICROSOFT: DEV241X"
              desc=" This course is part of the Microsoft Professional Program in Entry-Level Software Development.
              I enrolled in this course as a way to keep myself engaged between semesters at the Austin Coding Academy. 
              The major takeaways are: 
              -How to conduct in-depth interviews and other surveys in order to understand the user
              - Ways to synthesize ideas into a cohesive and practical product
             -  Use of simple prototyping tools to quickly iterate designs
             - How to design User Interfaces that are tailored to be easy and efficient
           " 
              skills=" User Experience and Interface, Wireframing tools (balsamiq and sketch), user research "
              type="Self-paced certification program"
              />
             </Col>
                   <Col  xs={12} md={4} lg={6}>
                   <Project 
              title="AUSTIN CODING ACADEMY"
              desc=" I am currently studying fullstack web development and UX/UI design 
              at the Austin Coding Academy. I will graduate in February with an expertise in 
              design and development as well as a certification in fullstack web development and program completion.
               " 
              skills=" Fullstack web development and UXUI design "
              type="TWC CERTIFICATION OF FULLSTACK WEB DEVELOPMENT AND PROGRAM COMPLETION"
              />
           </Col>
           <Col  xs={12} md={2} lg={4}>
            <Project 
              title="PERSONAL EXPERIENCE"
              desc=" Before I was a student of the Austin Coding Academy, I
              networked with other developers in the Austin coding scene. I
              sought opportunities to work under senior developers through groups
              and hack-a-thons. I was eventually pointed to ACA through a conversation
              with one particular developer who inspired me to seriously pursue my passion. " 
              skills=" Introduction to web development and design "
              type="Self-taught, mentorship"
              />
           </Col>
        </Row>
    </Grid>
  <h1> 
      <a id="edu" href="#section3"> STATEMENT </a>
       </h1>
    </div>

		);
	}
}


  
export default Intro;

