import React from "react";
import { fetchCountries, fetchNews } from "../helper/apicalls";
import Navbar from '../Navbar/Navbar';
import Casecard from '../Casecard/CaseCard'
import Allcases from '../AllCases'
import CountryCard from '../CountryCard'
import Recovery from '../RecoveryCard/Recoverycard'
import SocialCard from '../Socialcard/SocialCard';
import MapCard from '../Mapcard/MapCard'
import GraphCard from '../Graphcard/GraphCard'
import Newscard from '../NewsandUpdates/Newscard'
import Twitter from '../Twittercard/Twitter'
import "./Home.css"
// import 'bootstrap/dist/css/bootstrap.min.css';



class Home extends React.Component{
	constructor(props){
 		super(props);
 		this.state={
 		country:this.props.country
 		}
 	}
 	
 	handler = (val)=>{
 		this.setState({country:val});
 	}
 	
	render(){
  		return (
				 <div className="container-fluid">
					
                    <div className="home-container">
                        <div className="main-wrapper">
                            <div className="Wrapper">

                                <div className="Allcasesandmap">
                                    <div className="allCases">
                                        <Allcases />
                                    </div>

                                    <div className="MapandCountry">
                                        <CountryCard />
                                        
                                        <MapCard handler = {this.handler}/>
                                    
                                    </div>
                                </div>
                
                                
                            </div>
                            <GraphCard country={this.state.country}/>
                            
                        </div>
                        <div className="Recoveryandtwitter">
                            <Recovery />
                            <Twitter />
                        </div>
                    </div>

					
                     
          
				</div>
        			
    			
  		);
	}
}

export default Home;


