import React from 'react';
import './GraphCard.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
class GraphCard extends React.Component{
	
	constructor(props){
		super(props);
		this.data_mode={"confirmed":null,"recovered":null,"deceased":null};
		this.chart=null;
	}
	
	//update data on change of country	
	updateData = (data)=> {
			let total_cases=[],total_recoveries=[],total_deaths=[];
            	let temp = data['timelineitems'][0];
            	for(let e in temp){
               		total_cases.push({date:e,value:temp[e]['total_cases']});
               		total_recoveries.push({date:e,value:temp[e]['total_recoveries']});
               		total_deaths.push({date:e,value:temp[e]['total_deaths']});
            	}
        		this.data_mode["confirmed"]=total_cases;
        		this.data_mode["recovered"]=total_recoveries;
        		this.data_mode["deceased"]=total_deaths;
	}
	
	//create the graph
	createChart = ()=>{
		let chart = am4core.create("chartdiv",am4charts.XYChart);
    		let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    		let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    		dateAxis.renderer.grid.template.location = 0;
		valueAxis.tooltip.disabled = true;
    		valueAxis.renderer.minWidth = 35;
		let series = chart.series.push(new am4charts.LineSeries());
    		series.dataFields.dateX = "date";
    		series.dataFields.valueY = "value";
    		series.tooltipText = "{valueY.value}";
    		chart.cursor = new am4charts.XYCursor();
		let scrollbarX = new am4charts.XYChartScrollbar();
    		scrollbarX.series.push(series);
    		chart.scrollbarX = scrollbarX;
		chart.data = this.data_mode['confirmed'];
    		this.chart = chart;    
	}
	
	//switch graph between different types
	switchMode = (mode)=> {
		if(this.chart)
			this.chart.data=this.data_mode[mode];
	}
	
	
	confirmed = ()=>{this.switchMode('confirmed');}
	recovered = ()=>{this.switchMode('recovered');}
	deceased = ()=>{this.switchMode('deceased');}
	
	componentDidMount(){
	    	fetch('https://api.thevirustracker.com/free-api?countryTimeline='+this.props.country)
	    	.then((response)=>{return response.json();})
	    	.then((data)=>{
			this.updateData(data);
			this.createChart();
			///console.log(data);
	    });
	}

		 
	componentDidUpdate(){
		fetch('https://api.thevirustracker.com/free-api?countryTimeline='+this.props.country)
	    	.then((response)=>{return response.json();})
	    	.then((data)=>{
	    		this.updateData(data);
	    		this.switchMode("confirmed");
	    	});    
	}

	componenWillUnmount(){
        if(this.chart)
            this.chart.dispose();
     }
    

	render(){
		return (
		<div className='graph-container'>
		<div className='controls'>
		<h1 id="title">Spread Trends</h1>
		<button className='change-btn' onClick ={this.confirmed}>Confirmed</button>
		<button className='change-btn' onClick={this.recovered}>Recovered</button>
		<button className='change-btn' onClick={this.deceased}>Deceased</button>
		</div>
		 <div className='chartdiv'></div>  
		</div>
		);
  	 }
}

export default GraphCard;
