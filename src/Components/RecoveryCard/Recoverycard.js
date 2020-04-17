import React , {Component} from 'react';
import axios from 'axios';
import './Recoverycard.css';

class Recovery extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:null,
    //         ratio:'',
    //         rRatio:''
        
    //     };
    // }

    state = {
        data : [],
        ratio : '',
        rRatio : ''
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/all')
        .then(response => {
            const data = response.data;
            this.setState({data});
            const ratio = (response.data.recovered/response.data.cases)*100;
            this.setState({ratio})
            const rRatio = ratio.toFixed(2)
            this.setState({rRatio})
            console.log(ratio);
            
        })
        
    
    }
    render(){
        console.log(this.state.data)
        return(
            
                <div className="wrapper-recovery">
                    <div><h3 className="main-heading">Ratio of Recovery</h3></div>
                    <div>
                        <div className="outer-circle">
                            <div className="inner-circle"><h3 className="h3">{this.state.rRatio}%</h3></div>
                        </div>
                    </div>
                    <div className="recovery-data">
                        <div>{this.state.data.cases} Affected |</div>
                        <div>{this.state.data.recovered} Recovered</div>
                    </div>
                </div>
        )
    }
}

export default Recovery