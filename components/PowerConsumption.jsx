import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {LineChart} from 'react-native-chart-kit';
import {Text, Dimensions} from 'react-native';
import DayInput from './DayInput';

// This component creates the power consumption page to the application using Fingrids open data platform
const PowerConsuption = () => {

  const  [pCons, setPCons] = useState([0]);
  const [pTime, setPTime] = useState();

  // Sets default date to current date
  const currDate = moment().format().slice(0,10)
  const [sDay, setSDay] = useState([currDate]);
  const [eDay, setEDay] = useState([currDate]);

  // ApiKey and Base url to fetch power consumption data from FinGrids open data platform 
  // You can get your APIkey from https://data.fingrid.fi/en/pages/apis 
  const apiKey = `J0QSbDt3dr5FctqFckNvF59NCSBtdymR36sADRq2`;
  const baseUrl = `https://api.fingrid.fi/v1/variable/265/events/json?start_time=${sDay}T00%3A00%3A00Z&end_time=${eDay}T23%3A59%3A59Z`;
  
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
  }, []);


  // Creating datasets to display in chart
  const datasets = {
    datasets: [
      {
        data: pCons
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
    renderDotContent: pTime 
  };

  return (
    <>
    <DayInput />

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
      <Text>How many grams of Co2 is produced during consuming 1 KWH in Finland</Text>
      

    </>
  );
};
export default PowerConsuption;
