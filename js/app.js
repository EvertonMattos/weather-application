const cityForm  = document.querySelector('[data-js="change-location"]')

const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCardContainer = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCard = ()=>{
    if(cityCardContainer.classList .contains('d-none')){
        cityCardContainer.classList.remove('d-none')
    }
    
}
const showInforWeather = (LocalizedName,WeatherText,ConversionTemperature,timeIcon)=>{
    
timeIconContainer.innerHTML = timeIcon
cityNameContainer.textContent= LocalizedName
cityWeatherContainer.textContent= WeatherText
cityTemperatureContainer.textContent = ConversionTemperature
}
cityForm.addEventListener('submit',async event=>{
event.preventDefault()

const inputValue = event.target.city.value

const [{Key,LocalizedName}] = await getCityData(inputValue)
const [{WeatherText,Temperature,IsDayTime,WeatherIcon}] = await getCityWeather(Key)
const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`
const ConversionTemperature = Math. ceil(Temperature.Metric.Value)

showCard()
timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'



showInforWeather(LocalizedName,WeatherText,ConversionTemperature,timeIcon)
cityForm.reset()
})