import React ,{Component} from 'react';

import './CaseCard.css';
import Up from '../../assets/Up.svg';
import Down from '../../assets/Down.svg';
import Graph from '../../assets/Graph.svg';
import Graph1 from '../../assets/Graph 1.svg';
import Graph2 from '../../assets/Graph 2.svg';
import Graph3 from '../../assets/Graph 3.svg';


 class Casecard extends Component {
    constructor(props){
        super(props);
        this.state={data:null};
    }

    componentDidMount(){
        fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search').then((response)=>{return response.json();}).then((data)=>{
          this.setState({data:data});  
        });
        console.log(data);
        
    }
   

render(){
    return(
       
<div>
        
    <div className="Card">
        <div className="CaseCard">
            <div>
                 <h4>Total Cases<img src={Up} alt="Danger"/></h4>
                 <h2>{this.state.data.total_cases}</h2>
             </div>
             <div className="img">
                 <img src={Graph} alt="Graph"/>
             </div>
        </div>
        <div className="CaseCard">
             <div>
                <h4>Recovered<img src={Down} alt="Relax"/></h4>
                <h2>{this.state.data.total_recovered}</h2>
             </div>
             <div className="img">
                <img src={Graph1} alt="Graph"/>
             </div>
        </div>
        <div className="CaseCard">
             <div>
                <h4>Active Cases<img src={Up} alt="Danger"/></h4>
                <h2>{this.state.data.active_cases}</h2>
            </div>
            <div className="img">
                <img src={Graph2} alt="Graph"/>
            </div>
        </div>
        <div className="CaseCard">
            <div>
                <h4>Total Deaths<img src={Up} alt="Danger"/></h4>
                <h2>{this.state.data.total_deaths}</h2>
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