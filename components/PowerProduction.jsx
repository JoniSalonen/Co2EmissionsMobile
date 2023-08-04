import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {LineChart} from 'react-native-chart-kit';
import {Text, Dimensions, Button} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {useTheme} from '@react-navigation/native';

// This component creates the power production page to the application using Fingrids open data platform
const PowerProduction = () => {
  //set Apps color based on your devices settings
  const colors = useTheme().colors;

  // Sets default date to current date
  const currDate = moment().format().slice(0, 10);

  // Sets the data from opensource
  const [pProd, setPprod] = useState([0]);

  // Sets dates to URL
  const [sDay, setSDay] = useState([currDate]);
  const [eDay, setEDay] = useState([currDate]);

  // Sets dates from datepicker and controls opening of datepicker
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  //displays the date where you want to see the data
  const [displayDate, setDisplayeDate] = useState([
    date.toDateString().slice(3, 15),
  ]);
  console.log(sDay);

  // ApiKey and url to fetch data
  //you can get your APIkey from https://data.fingrid.fi/en/pages/apis
  // to insert your api key create .env file if not included and create a variable named FinnGridApi
  // and you can insert your personal APIKEY there and name it FinnGridApi = yourapikey
  const baseUrl = `https://api.fingrid.fi/v1/variable/266/events/json?start_time=${sDay}T00%3A00%3A00Z&end_time=${eDay}T23%3A59%3A59Z`;

  // Fetching data using Axios Library
  useEffect(() => {
    async function getPprod() {
      const results = await axios.get(baseUrl, {
        headers: {
          'x-api-key': process.env.FinnGridApi,
        },
      });
      setPprod(results.data.map(v => v.value));
    }
    getPprod();
  }, [sDay, eDay]);

  // Creating datasets to display in chart
  const datasets = {
    datasets: [
      {
        data: pProd,
      },
    ],
  };

  //Configuring optional options to chart
  const chartConfig = {
    backgroundColor: `rgb(0,25,50)`,
    backgroundGradientFrom: `rgb(0,2,5)`,
    backgroundGradientTo: `rgb(0,70,150)`,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '3',
      strokeWidth: '2',
      stroke: 'rgb(50,50,50)',
    },
  };

  return (
    <>
      <Text style={{color: colors.text}}>
        {'How many grams of Co2 was produced during ' +
          displayDate +
          ' while producing 1 KWH of power in Finland.'}
      </Text>

      <DatePicker
        modal
        mode="date"
        date={date}
        open={open}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setSDay(date.toISOString().slice(0, 10));
          setEDay(date.toISOString().slice(0, 10));
          setDisplayeDate(date.toDateString().slice(3, 15));
        }}
        onCancel={() => {
          setOpen(false);
          theme = 'auto';
        }}
      />

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
      <Button
        title="Click here to select your wanted date"
        onPress={() => setOpen(true)}
        color={'blue'}
      />
    </>
  );
};
export default PowerProduction;
