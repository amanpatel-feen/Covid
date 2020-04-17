import React from 'react';
import './MapCard.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
class MapCard extends React.Component{
  constructor(props){
    super(props);
    this.state={data:null,}
}
componentDidMount(){
   fetch('https://corona.lmao.ninja/v2/countries?sort=country').then((response)=>{return response.json();}).then((data)=>{
   	data = data.map(function(e,idx){
   	return ({
   		"id":e["countryInfo"]["iso2"],
		"name":e["country"],
		"total_cases":e["cases"],
		"active_cases":e["active"],
		"total_deaths":e["deaths"],
		"total_recovered":e["recovered"],
		"flag":e["countryInfo"]["flag"],
		"fill":(e["cases"]>4000?"#aa0000":"#550000")
		});	   	
   	});
   	console.log(data[0]["flag"]);
   	this.setState({data:data});  
    	
       let map = am4core.create("chartdiv",am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.slider.height = 100;
    map.projection = new am4maps.projections.Miller();
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    let polygonTemplate = polygonSeries.mapPolygons.template;
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#0000f5");
        polygonSeries.useGeodata = true;
        polygonSeries.data = this.state.data;
       //console.log(this.state.data['data']['rows']);
        polygonTemplate.propertyFields.fill = "fill";
   polygonTemplate.tooltipHTML = '<div style="padding:10px"><center>{name}  <img src="{flag}" width="30px" height:"30px"/></center><br/>Active Cases : {active_cases}<br/>Total Recovered : {total_recovered}<br/>Total Deaths : {total_deaths}</div>';	
 });
   
    
}
componentDidUpdate(){

}

componentDidUmount(){
    if(this.chart){
        this.chart.dispose();
    }
}
render()
    {
    return (
    <div className='map-container'><h4>COVID-19 Affected Areas</h4>
        <div className='mapdiv'></div>
    </div>
    );
}
}
export default MapCard;
