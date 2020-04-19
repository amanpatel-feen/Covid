import React from 'react';
import './Modal.css';
class Modal extends React.Component{
    render(){
    			if(!this.props.show)
     	     			return null;
     	  return (
     	  	<div className='modal-box'>
     	  	<button className='close-btn' onClick={this.props.handler}>x</button>
     	  	<div className='content'>
			<h2>COVID-19 ALERT!</h2>
            	<span> Some common symptoms that have been specifically linked to COVID-19 include:</span>
                <ol>
                    <li>Having a cough that gets more severe over time.</li>
                    <li>A low-grade fever that gradually increases in temperature.</li>
                    <li>Shortness of breath.</li>
                    <li>Persistent pain or pressure in the chest.</li>
                    <li>Excessive Drowsiness.</li>
                </ol>
     	  	 
     	  	</div>
     	  	
     	  	</div>	
     	  );
    }
}
export default Modal;

