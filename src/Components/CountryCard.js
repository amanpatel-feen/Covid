import React from 'react';
import Up from '../assets/Up.svg';
// import Down from '../assets/Down.svg';
import './CountryCard.css';
          
class CountryCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state={data:null};
    }
    
    componentDidMount(){
        fetch('https://corona.lmao.ninja/v2/countries?sort=country')
        .then((response)=>{return response.json();})
        .then((data)=>{
        	data = data.map(function(e,idx){
   				return ({
   					"country":e["country"],
					"total_cases":e["cases"],
					"total_recovered":e["recovered"],
					"flag":e["countryInfo"]["flag"],
				});	   	
   			});
   		data.sort((e1,e2)=>{return (e2['total_cases']-e1['total_cases']);});
   	this.setState({data:data});
   	});
    }
    
    filter  = ()=>{
    		let filter_txt=document.getElementById('search-box').value.toUpperCase();
    		let blocks = document.getElementsByClassName('country-block');
    		for(let i=0;i<blocks.length;i++){
    			let name = blocks[i].innerText.split('\n')[0].toUpperCase();
    			if(name.indexOf(filter_txt)>-1)
    				blocks[i].style.display='';
    			else
    				blocks[i].style.display='none';
    		}
    }
    
    render(){
     	        let ele=null;
     	        if(this.state.data){
     	        	ele = this.state.data.map(function(e,idx){ return(
     	        	<div key={idx} className='country-block'><div className='blocks'>
                    <div style={{padding:"10px"}}>
                    <img className="flag" id='country-flag' src={e['flag']} alt={e['country']} align='left'/>
                    <h4 id='country-name'>{e['country']}</h4><br/>
                    <div style={{fontSize:"13px",margin:"5px"}}>
                    <span>{e['total_cases']} Affected</span> | <span>{e['total_recovered']} Recovered</span></div></div>
                    <div style={{alignSelf:"center"}}>
                    <img style={{marginRight:"20px"}} src={Up}/></div>
                    </div></div>
                    );
                  });
              }
     	  return (
        
            <div className='country-container'>
           <center><input type='text' id='search-box' onKeyUp={this.filter} placeholder='Search Country'/></center><br/>
            {ele}
            </div>
               );
    }
}
export default CountryCard;
