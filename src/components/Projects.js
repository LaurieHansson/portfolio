import React from 'react';
import Project from "./PropCalls";
import { Jumbotron, Button, Image,Col,Row,Grid} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'


const Projects = (props) => {
  return (

    <div>
      <div className="skews">
        	<section className="section-skew left">
		</section>
      	<section className="section-skew">
		</section>
      	<ScrollableAnchor id={'section1'}>
		<br></br>
    </ScrollableAnchor>
    </div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8} lg={4}>
            <Project 
              title="The Permanent Legacy Foundation"
              desc="As a contributor frontend developer for the Permanent Legacy foundation,
              I designed and developed content gallery layouts for clients to view their uploaded
              photo and video media in an aesthetic, intuitive viewing enviornment."
              skills=" HTML, CSS (bootstrap, CSS-grid), Javascript (Jquery),team collaboration, Git"
              type="internship"
            />
            </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title="RIVERBEND CHURCH"
              desc=" As a UX/UI intern for the Riverbend Church, I am heavily involved in  redesigning
              and redeveloping the userflow and interface of our mobile application and web page. In the last 
              month, I have developed a skillset in Sketch and inVision. I have also spent extensive amounts of time
              researching competitor applications and developing a more firm understanding of their best practices." 
                   skills="Sketch, Wireframing, team collaboration, project management"
              type="internship"
            />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title="SpotHunter"
              desc=" SpotHunter is a MERN application that will be released to the public in February
                  of 2019. I am currently focused on project-management and fullstack web development. 
                  This is a student based project that gained more traction than imagined in the development 
                  community and we are now transitioning to an LLC. "
              skills=" Fullstack, project management"
              type=" Professional "
            />
          </Col>
       </Row>
   </Grid>
   
 </div>


  
  );
};

export default Projects;