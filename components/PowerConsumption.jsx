import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {LineChart} from 'react-native-chart-kit';
import {Text, Dimensions} from 'react-native';
import DayInput from './DayInput';

// This component creates the power consumption page to the application using Fingrids open data platform
const PowerConsuption = () => {

  const [pCons, setPCons] = useState();
  const [pTime, setPTime] = useState();

  const [sDay, setSDay] = useState(`2023-05-01`);
  const [eDay, setEDay] = useState(`2023-05-01`);

  const startTime = `${sDay}T00%3A00%3A00Z`;
  const endTime = `${eDay}T23%3A59%3A59Z`;

  // ApiKey and Base url to fetch power consumption data from FinGrids open data platform 
  // You can get your APIkey from https://data.fingrid.fi/en/pages/apis 

  const apiKey = `J0QSbDt3dr5FctqFckNvF59NCSBtdymR36sADRq2`;
  const baseUrl = `https://api.fingrid.fi/v1/variable/265/events/json?start_time=${startTime}&end_time=${endTime}`;
  
  // Fetching data using Axios Library
  useEffect(() => {
    async function getPCons() {
      const results = await axios.get(baseUrl, {
        headers: {
          'x-api-key': `${apiKey}`,
        },
      });
      setPCons(results.data.map(v => v.value));
      setPTime(results.data.map(c => c.start_time));
    }
    getPCons();

    console.log(pCons?.[0]);
    //console.log(pTime);

  }, []);


  // Creating datasets to display in chart
  const datasets = {
    labels:pTime,
    datasets: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  //Configuring optional options to chart
  const chartConfig = {
    backgroundColor: `rgb(50,205,50)`,
    backgroundGradientFrom: `rgb(50,205,50)`,
    backgroundGradientTo: `rgb(30,150,150)`,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    barPercentage: 0.5,
    barRadius: 5,
    propsForDots: {
      r: '3',
      strokeWidth: '2',
      stroke: 'rgb(255,50,50)',
    },
  };

  return (
    <>
      <Text>How many grams of Co2 is produced during consuming 1 KWH in Finland</Text>
      <LineChart
        data={datasets}
        width={Dimensions.get('window').width}
        chartConfig={chartConfig}
        height={550}
        yAxisSuffix="g/CO2"
        yAxisInterval={0.5} // optional, defaults to 1
        bezier
        horizontalLabelRotation={-50}
        verticalLabelRotation={50}
        style={{
          marginVertical: 2,
          borderRadius: 16,
        }}
      />

      <DayInput />
    </>
  );
};
export default PowerConsuption;
