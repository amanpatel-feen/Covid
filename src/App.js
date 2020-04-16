import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Casecard from './Components/Casecard/CaseCard'
import Allcases from './Components/AllCases'
import CountryCard from './Components/CountryCard'
import Recovery from './Components/RecoveryCard/Recoverycard'
import SocialCard from './Components/Socialcard/SocialCard';
import MapCard from './Components/Mapcard/MapCard'
import GraphCard from './Components/Graphcard/GraphCard'

// function App() {
//   return (
//     <div className="App">
//     <Navbar />
//     <div className="Wrapper">
//     <div className="Allcasesandmap">
//       <div>
//         <Allcases />
//       </div>

//       <div className="MapandCountry">
//       <CountryCard />
//       <MapCard />
//       </div>
      

//     </div>

//     <Recovery />
//     </div>

//     </div>
//   );
// }

// export default App;

class App extends React.Component{
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
				 <div className="App">
					<Navbar />
					<div className="Wrapper">
					<div className="Allcasesandmap">
					<div>
						<Allcases />
					</div>

					<div className="MapandCountry">
					<CountryCard />
					
					<MapCard handler = {this.handler}/>
       				
					</div>
					

					</div>
          
					<Recovery />
					</div>
          <GraphCard country={this.state.country}/>

					</div>
        			
    			
  		);
	}
}

export default App;

