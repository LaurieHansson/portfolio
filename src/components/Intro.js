import React, { Component } from 'react';
import Project from "./PropCalls";
import { Jumbotron, Button, Image,Col,Row,Grid} from 'react-bootstrap';
import portfolio from '../portfolio.jpeg';
// set desired states in constructor
// change the state with setState
class Intro extends Component {
	render() {
		return (
			<div className="Intro-Box">
		

		   <Grid>
		  
        <Row className="show-grid b">
		 <img src={portfolio}/>
          <Col xs={12} md={8} lg={3}>
            <Project 
							title=" Hi, I'm Laurie."
							desc="I sincerely believe that wonderful designs can change the world. 
							Development is a field for pioneers who are willing to take risks,
							challenge themselves and approach the unknown with grit and resilience. 
							If your looking for someone who will give their best to each and every project,
							I'm the developer for you. 
							Feel free to explore this portfolio, and if you'd like to get in touch, 
							tap that email button!
							"
            />
          </Col>
		  <div className='Icons'>
 		<li>
 			 <a target='_blank' href='https://github.com/LaurieHansson'>
 			 <i class="fab fa-github"></i>
 			  </a> 
 		</li>
 	  <li> 
 		   <a target='_blank' href='mailto:lhanssonatx@gmail.com'>
 		    <i class="far fa-envelope"></i>
 			</a>
 		</li>
 	  <li>  
		  <a target='_blank'href='https://www.linkedin.com/in/lauren-hansson/'>
 		  <i class="fab fa-linkedin"></i>
		  </a>
 	</li>
 		</div>
 		<div id='anchor-point'>
 		<h1><a href="#section1"> EXPLORE PROJECTS </a> </h1>
 		</div>
			</Row>
	</Grid>
</div>

		);
	}
}


  
export default Intro;
