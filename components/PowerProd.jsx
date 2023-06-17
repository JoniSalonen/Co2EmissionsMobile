import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {
  LineChart
} from "react-native-chart-kit";
import { Text,Dimensions } from 'react-native';
import DayInput from "./DayInput";

const PowerProduction = () => {


  const [pProd, setPprod] = useState([]);
  const chartRef = useRef();
  const screenWidth = Dimensions.get("window").width;  // from react-native

  const [sDay, setSDay] = useState([`2023-05-01`]);
  const [sTime, setSTime] = useState([`01%3A00%3A00`]);
  const [eDay, setEDay] = useState([`2023-05-01`]);
  const [eTime, setETime] = useState([`01%3A10%3A00`]);
 

    const startTime = `${sDay}T${sTime}Z`
    const endTime = `${eDay}T${eTime}Z`

    const apiKey = `J0QSbDt3dr5FctqFckNvF59NCSBtdymR36sADRq2`
    const variable = `266`

    const baseUrl = `https://api.fingrid.fi/v1/variable/${variable}/events/json?start_time=${startTime}&end_time=${endTime}`

  useEffect(() => {
    async function getPprod(){
      const results = await axios.get(baseUrl,{headers:{
        'x-api-key':`${apiKey}`
         }});
      setPprod(results.data);
      
    }
    getPprod();

}, []);  



const datasets = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets:[
      {
        data:[1,2,3]   
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
  propsForDots: {
    r: "3",
    strokeWidth: "2",
    stroke: "rgb(255,50,50)"
  }
}

    return(   
      <>
      <Text>Grams of CO2 from kWh</Text>
      <Text>{dataValue.map(c => c.value)}</Text>
      <Text>{dataTime.map(c => c.startTime)}</Text>
      <LineChart
        data={datasets}
        width={screenWidth}
        height={550}
        yAxisSuffix="g/CO2"
        yAxisInterval={0.5} // optional, defaults to 1
        chartConfig={chartConfig}
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
export default PowerProduction;