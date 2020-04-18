import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'

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
	// constructor(props){
 	// 	super(props);
 	// 	this.state={
 	// 	country:this.props.country
 	// 	}
 	// }
 	
 	// handler = (val)=>{
 	// 	this.setState({country:val});
 	// }
 	
	render(){
  		return (
				 <div className="App">
					<Home  country="IN" />
					</div>
        			
    			
  		);
	}
}

export default App;

