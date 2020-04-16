import React ,{Component} from 'react';
import axios from 'axios';

import './CaseCard.css';
import Up from '../../assets/Up.svg';
import Down from '../../assets/Down.svg';
import Graph from '../../assets/Graph.svg';
import Graph1 from '../../assets/Graph 1.svg';
import Graph2 from '../../assets/Graph 2.svg';
import Graph3 from '../../assets/Graph 3.svg';
import { axisBottom } from 'd3';


 class Casecard extends Component {
    constructor(props){
        super(props);
        this.state={data:null};
    }

    // async componentDidMount(){
    //     const response = await fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search');
    //     const json = await response.json();
    //     this.setState({ data: json });    

        
    //     console.log(data);
        
    // }
   componentDidMount(){
       axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search')
       .then(response => {
            const data1= response=json()
            this.setState({data:data1})})
   }

render(){
    return(
       
<div>
        
    <div className="Card">
        <div className="CaseCard">
            <div>
                 <h4>Total Cases<img src={Up} alt="Danger"/></h4>
                 <h2>{this.state.data["data"]['rows'][0][total_cases]}</h2>
             </div>
             <div className="img">
                 <img src={Graph} alt="Graph"/>
             </div>
        </div>
        <div className="CaseCard">
             <div>
                <h4>Recovered<img src={Down} alt="Relax"/></h4>
                <h2>{this.state.data["data"]['rows'][0][total_recovered]}</h2>
             </div>
             <div className="img">
                <img src={Graph1} alt="Graph"/>
             </div>
        </div>
        <div className="CaseCard">
             <div>
                <h4>Active Cases<img src={Up} alt="Danger"/></h4>
                <h2>{this.state.data["data"]['rows'][0][active_cases]}</h2>
            </div>
            <div className="img">
                <img src={Graph2} alt="Graph"/>
            </div>
        </div>
        <div className="CaseCard">
            <div>
                <h4>Total Deaths<img src={Up} alt="Danger"/></h4>
                <h2>{this.state.data["data"]['rows'][0][total_deaths]}</h2>
            </div>
            <div className="img">
                <img src={Graph3} alt="Graph"/>
            </div>
        </div>
    </div>
</div>

    )
}
 }

 export default Casecard