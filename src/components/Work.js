import React from 'react';
import Project from "./PropCalls";
import { Jumbotron, Button, Image,Col,Row,Grid} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'


const Work = (props) => {

  
  return (
    <div className="work-content">
    <Grid>
        <Row className="show-grid">
          <Col  xs={12} md={4} lg={6}>
            <Project className="project"
              title="LOCALHOSTERS"
              desc="LOCALHOSTERS is a websocket application I built to develop a better understanding 
              of severside functionality and broadcasting messages through servers."
              skills=" HTML, CSS (bootstrap, CSS-grid), Javascript (Jquery)"
              type="passion"
            />
          </Col>
          <Col xs={12} md={4} lg={6}>
            <Project className="project"
              title="The Hustle Assistant"
              desc="LOCALHOSTERS is a websocket application I built to develop a better understanding 
              of severside functionality and broadcasting messages through servers."
              skills=" HTML, CSS (bootstrap, CSS-grid), Javascript (Jquery)"
              type="passion"
            />
          </Col>
        </Row>
      </Grid>
      <div id='anchor-point'>
		<ScrollableAnchor id={'section2'}>
		<br></br>
 		</ScrollableAnchor>
	</div>
  <h1> <a id="edu" href="#section2"> EDUCATION </a> </h1>
    </div>
  );
};

export default Work;