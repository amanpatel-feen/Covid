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
		dateAxis.title.text='Date';
		valueAxis.tooltip.disabled = true;
    		valueAxis.renderer.minWidth = 35;
    		valueAxis.title.text='Cases';
		let series = chart.series.push(new am4charts.LineSeries());
    		series.dataFields.dateX = "date";
    		series.dataFields.valueY = "value";
    		series.tooltipText = "{valueY.value}";
    		series.strokeWidth=3;
    		let bullet = series.bullets.push(new am4charts.CircleBullet());
    		bullet.circle.radius=4;
    		bullet.fill=am4core.color('#A00');
    		bullet.circle.stroke=am4core.color('#fff');
    		bullet.circle.strokeWidth=1;
    		bullet.horizontalCenter='middle';
    		bullet.verticleCenter='middle';
 		let hs = bullet.states.create('hover');
 		hs.properties.scale = 1.8;	
    		chart.cursor = new am4charts.XYCursor();
    		series.tensionX=0.9;
    		
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
	
	change_color=(e,mode)=>{
		for(let i=0;i<e.length;i++){
			if(i===mode){
				e[i].style.background='#222831';
				e[i].style.color='#eeeeee';
			}
			else{
				e[i].style.background='#eeeeee';
				e[i].style.color='#222831';
			}
		}
	}
	
	confirmed = ()=>{this.switchMode('confirmed');
		this.change_color(document.getElementsByClassName('change-btn'),0);
	}
	recovered = ()=>{this.switchMode('recovered');
		this.change_color(document.getElementsByClassName('change-btn'),1);
	}
	deceased = ()=>{this.switchMode('deceased');
		this.change_color(document.getElementsByClassName('change-btn'),2);
	}
	
	componentDidMount(){
	    	fetch('https://api.thevirustracker.com/free-api?countryTimeline='+this.props.country)
	    	.then((response)=>{return response.json();})
	    	.then((data)=>{
			this.updateData(data);
			this.createChart();
			this.confirmed();
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
		<div>
		<h1 id="title">Spread Trends</h1>
		<div className='controls'>
		<button className='change-btn' onClick ={this.confirmed}>Confirmed</button>
		<button className='change-btn' onClick={this.recovered}>Recovered</button>
		<button className='change-btn' onClick={this.deceased}>Deceased</button>
		</div></div>
		<div className='chartdiv'></div>  
		</div>
		);
  	 }
}

export default GraphCard;
