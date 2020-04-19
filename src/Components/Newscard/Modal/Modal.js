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
     	  	 dummy data<br/>
     	  	 
     	  	</div>
     	  	
     	  	</div>	
     	  );
    }
}
export default Modal;

