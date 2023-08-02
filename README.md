# Co2EmissionsMobile
This projects idea was to create mobile application to display power consumption and power production graphs from FinGrids open source data platform.

# Used technology
project was created using JavaScript with React Native development enviroment in Visual Studio Code. 

[Axios](https://axios-http.com/docs/intro) was used for Api calls. 

[React-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit) was used to to display the data. 

[Moment](https://momentjs.com/) and [Date picker](https://www.npmjs.com/package/react-datepicker) was used to get current date and enabling user to switch between dates.

# Used APIs
I used 2 different [FinGrids](https://data.fingrid.fi/open-data-forms/registration/) APIs was used to fetch necessary data to display
[Electricity consumption](https://data.fingrid.fi/en/dataset/suomessa-kulutetun-sahkon-paastokerroin-reaaliaikatieto) and [Electrity production](https://data.fingrid.fi/en/dataset/suomen-sahkontuotannon-paastokerroin-reaaliaikatieto)

# Instructions how to deploy project
If you want to run the code you can pull the project from [GitHub](https://github.com/JoniSalonen/Co2EmissionsMobile)
and fetch your own apikey from [FinGrid](https://data.fingrid.fi/open-data-forms/registration/)

After pulling from GitHub and fething ApiKey from [FinGrid](https://data.fingrid.fi/open-data-forms/registration/) you need open the code. And to create " .env " file and write there " FinnGridApi = " in .env file and insert your Apikey there.

Now you can run the project in command line, powershell etc. 
"npx react-native run-android" is command that works in command prompt.

# Links
[Video]()   
[Creator](https://github.com/JoniSalonen)

