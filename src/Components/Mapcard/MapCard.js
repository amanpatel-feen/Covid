import React from 'react';
import './MapCard.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

class MapCard extends React.Component{
	
	constructor(props){
    		super(props);
    		this.state={data:null,};
		this.tooltipTemplate = "<div style='padding:10px'><center>{name}<img src='{flag}' width='30px' height:'30px'/><center><br/>Active Cases : {active_cases}<br/>Total Recovered : {total_recovered}<br/>Total Deaths : {total_deaths}</div>";	
	}
	
	//creating map
	createMap = ()=>{
		let map = am4core.create("mapdiv",am4maps.MapChart);
    		let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    		let polygonTemplate = polygonSeries.mapPolygons.template;
    		map.geodata = am4geodata_worldLow;
    		map.zoomControl = new am4maps.ZoomControl();
    		map.zoomControl.slider.height = 100;
    		map.projection = new am4maps.projections.Miller();
    		let hs = polygonTemplate.states.create("hover");
   	     	polygonTemplate.events.on("hit",(event)=>this.props.handler(event.target.dataItem.dataContext.id));
    		hs.properties.fill = am4core.color("#000034");
        	polygonSeries.useGeodata = true;
        	polygonSeries.data = this.state.data;
        	polygonTemplate.propertyFields.fill = "fill";
   		polygonTemplate.tooltipHTML = this.tooltipTemplate;
   		polygonSeries.heatRules.push({
  				"property": "fill",
  				"target": polygonSeries.mapPolygons.template,
  				"min": am4core.color("#FF0000"),
  				"max": am4core.color("#AA0000"),
  			});
   		// let heatLegend = map.createChild(am4maps.HeatLegend);
		// heatLegend.series = polygonSeries;
		// heatLegend.width = am4core.percent(100);
		// polygonSeries.mapPolygons.template.events.on("over", function(ev) {
  		// if (!isNaN(ev.target.dataItem.value))
    	// 		heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
		// else 
    	// 		heatLegend.valueAxis.hideTooltip();
		// });
		// polygonSeries.mapPolygons.template.events.on("out", function(ev) {
		//   heatLegend.valueAxis.hideTooltip();
		// });
	}
	
	componentDidMount(){
   	fetch('https://corona.lmao.ninja/v2/countries?sort=country')
   	.then((response)=>{return response.json();})
   	.then((data)=>{
   		data = data.map(function(e,idx){
   				return ({
   					"id":e["countryInfo"]["iso2"],
					"name":e["country"],
					"total_cases":e["cases"],
					"active_cases":e["active"],
					"total_deaths":e["deaths"],
					"total_recovered":e["recovered"],
					"flag":e["countryInfo"]["flag"],
					"value":e["cases"]
				});	   	
   			});
   		this.setState({data:data});  
    		this.createMap();
      	});
   	}


	componentDidUmount(){
    		if(this.chart)
        		this.chart.dispose();
   	}
   	
	render(){
    		return (
    			<div className='map-container'><h4>COVID-19 Affected Areas</h4>
        		<div className='mapdiv'></div>
    			</div>
    			);
	}
}
export default MapCard;