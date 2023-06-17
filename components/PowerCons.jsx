import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {LineChart } from "react-native-chart-kit";
import { Text,Dimensions } from 'react-native';
import DayInput from "./DayInput";

const PowerConsuption = () => {


  const [pCons, setPCons] = useState();
  const [pTime, setPTime] = useState();

  const [sDay, setSDay] = useState([`2023-05-01`]);
  const [sTime, setSTime] = useState([`01%3A00%3A00`]);
  const [eDay, setEDay] = useState([`2023-05-01`]);
  const [eTime, setETime] = useState([`01%3A10%3A00`]);

    const startTime = `${sDay}T${sTime}Z`
    const endTime = `${eDay}T${eTime}Z`

    const apiKey = ``
    const variable = `265`

  
    const baseUrl = `https://api.fingrid.fi/v1/variable/${variable}/events/json?start_time=${startTime}&end_time=${endTime}`
    const URL =     `https://api.fingrid.fi/v1/variable/265/events/json?start_time=2023-03-01T00%3A00%3A00Z&end_time=2023-03-01T00%3A10%3A00Z`
  

  useEffect(() => {
    async function getPCons(){
      const results = await axios.get(baseUrl,{headers:{
        'x-api-key':`${apiKey}`
         }});
      setPCons(results.data.map(c=> c.value));
      setPTime(results.data.map(c=> c.start_time));
    }
    getPCons();

    console.log(pCons);
    console.log(pTime);
   
    
}, []); 
const datasets = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets:[
      {
        label: "co2",
        data: [1,1,3],   
      }
    ]
};

const chartConfig ={
  backgroundColor: `rgb(50,205,50)`,
  backgroundGradientFrom: `rgb(50,205,50)`,
  backgroundGradientTo: `rgb(30,150,150)`,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  barPercentage: 0.5,
  barRadius: 5,
  propsForDots: {
    r: "3",
    strokeWidth: "2",
    stroke: "rgb(255,50,50)"
  }
}


    return(   
      <>
      <Text>Grams of CO2 from kWh</Text>
      <LineChart
    data={
    datasets
  }
  width={Dimensions.get("window").width}
  chartConfig ={chartConfig}
  height={550}
  yAxisSuffix="g/CO2"
  yAxisInterval={0.5} // optional, defaults to 1
  bezier
  horizontalLabelRotation={-50}
  verticalLabelRotation={50}
  style={{
    marginVertical: 2,
    borderRadius: 16
  }}
/>
      
      <DayInput/>
    </>
    );
};
export default PowerConsuption;