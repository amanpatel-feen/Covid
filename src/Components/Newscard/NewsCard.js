import React from 'react';
import Fever from '../../assets/fever.svg';
import Arrow from '../../assets/Arrow.svg';
import './NewsCard.css';
import Modal from './Modal/Modal';
class NewsCard extends React.Component{
    constructor(props){
    	super(props);
    	this.state={show:false};
    }
    toggle = ()=> {this.setState({show:!this.state.show})};
    render(){
     	     
     	  return (	
     	  	<div className='Newscard-container'>
					<div>
						<img id='image' src={Fever}/>
					</div>
					<div>
						<h4>News & Updates</h4>
						<h2>5 Symptoms of Corona Virus that you should know.</h2><br />
						<button onClick={this.toggle} >Read More <img src={Arrow}/></button>
					</div>
				<Modal show={this.state.show} handler={this.toggle}/>
     	  	</div>	
     	  );
    }
}
export default NewsCard;

