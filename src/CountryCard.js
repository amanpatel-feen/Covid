import React from 'react';
import Up from './assets/Up.svg';
import Down from './assets/Down.svg';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                affectedStats:this.props.affectedStats,
                recoveredStats:this.props.recoveredStats,
                slope:this.props.slope
        };
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        if((this.state.recoveredStats-prevState.recoveredStats)>(this.state.affectedStats-prevState.affectedStats))
            this.setState({slop:Down})
        else
            this.setState({slop:Up})
    }
    render(){
        const ele = (<div style={{margin:"5px",width: '100%',height: '62px',background: '#FFFFFF 0% 0% no-repeat padding-box',boxShadow: '0px 3px              12px #1425401A',borderRadius: '8px',opacity: '1',display:'flex',justifyContent:"space-between"}}>
                    <div style={{padding:"10px"}}>
                    <img style = {{height:'20px',width:'40px',borderRadius:'4px'}} src={this.props.countryFlag} alt={this.props.countryName}/>
                    <h4 style={{display:"inline",marginLeft:"15px",paddingBottom:"10px"}}>{this.props.countryName}</h4><br/>
                    <div style={{fontSize:"13px",margin:"5px"}}>
                     <span>{this.state.affectedStats} Affected</span> | <span>{this.state.recoveredStats} Recovered</span></div></div>
                    <div style={{alignSelf:"center"}}>
                    <img style={{marginRight:"20px"}}src={this.state.slope}/></div>
                    </div>
                    );
        return (ele);
    }
}
               
class CountryCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state={data:null};
    }
    
    componentDidMount(){
        fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search').then((response)=>{return response.json();}).then((data)=>{
          this.setState({data:data});  
        });
    }
    
    render(){
            var ele;
            if(this.state.data!=null){
                ele = this.state.data["data"]['rows'].map(function(e,idx){return (<Card key={idx} countryName={e['country']} countryFlag={e['flag']} affectedStats={e['total_cases']} recoveredStats={e['total_recovered']} slope={Up}/>)});
            }
            
        return (
            <div style={{overflowY:"scroll",overflowX:"hidden",width:"320px",height: "412px",padding:"10px",background: '#FFFFFF 0% 0% no-repeat padding-box',boxShadow: '0px 3px 12px #1425401A',borderRadius:'8px',margin:"15px"}}>{ele}</div>
               );
    }
}
export default CountryCard;

