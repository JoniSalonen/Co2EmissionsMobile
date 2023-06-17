import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {LineChart} from 'react-native-chart-kit';
import {Text, Dimensions} from 'react-native';
import DayInput from './DayInput';

// This component creates the power production page to the application using Fingrids open data platform
const PowerProduction = () => {
  const [pProd, setPprod] = useState([]);

  const [sDay, setSDay] = useState([`2023-05-01`]);
  const [eDay, setEDay] = useState([`2023-05-01`]);

  // ApiKey and url to fetch data
  //you can get your APIkey from https://data.fingrid.fi/en/pages/apis 
  //insert your personal APIKEY here
  const apiKey = `J0QSbDt3dr5FctqFckNvF59NCSBtdymR36sADRq2`;
  const baseUrl = `https://api.fingrid.fi/v1/variable/266/events/json?start_time=${sDay}T00%3A00%3A00Z&end_time=${eDay}T23%3A59%3A59Z`;

  // Fetching data using Axios Library
  useEffect(() => {
    async function getPprod() {
      const results = await axios.get(baseUrl, {
        headers: {
          'x-api-key': `${apiKey}`,
        },
      });
      setPprod(results.data);
    }
    getPprod();
  }, []);


  // Creating datasets to display in chart
  const datasets = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
    propsForDots: {
      r: '3',
      strokeWidth: '2',
      stroke: 'rgb(255,50,50)',
    },
  };

  return (
    <>
      <Text>How many grams of Co2 is produced during production of 1 KWH in Finland</Text>
      <Text>{dataValue.map(c => c.value)}</Text>
      <Text>{dataTime.map(c => c.startTime)}</Text>
      <LineChart
        data={datasets}
        width={Dimensions.get('window').width} // from react-native
        height={550}
        yAxisSuffix="g/CO2"
        yAxisInterval={0.5} // optional, defaults to 1
        chartConfig={chartConfig}
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
export default PowerProduction;
