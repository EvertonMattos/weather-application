const ApiKey = "n2VbvdrYXmdGoUk9xgARN26h7CGFo8nO";
const baseUrl = 'http://dataservice.accuweather.com/'
const getCityUrl = (cityName) =>
  `${baseUrl}/locations/v1/cities/search?apikey=${ApiKey}&q=${cityName}`;

const getWeatherUrl  =(cityKey)=>`${baseUrl}/currentconditions/v1/${cityKey}?apikey=${ApiKey}&language=pt-br`

  const fetchData = async url => {
  try {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Não foi possivel obter os dados");
    }
     return await response.json();
    

  } catch ({name,message}) {
    console.log(name,message)
  }
};

const getCityData = cityName=> fetchData(getCityUrl(cityName))

const getCityWeather = (cityKey)=> fetchData(getWeatherUrl(cityKey))

