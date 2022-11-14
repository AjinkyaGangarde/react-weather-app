const API_KEY = '3738897fde7047f0a1822737203011';
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

//https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1
const getWeatherData = (searchParams) =>{
    const url = new URL(BASE_URL)
    url.search = new URLSearchParams({...searchParams,key:API_KEY});
    
    return fetch(url)
            .then((res)=>res?.json())
            .catch((e)=>{
                console.log("Error :  Failed to load the data")
            }) 
}

const formattedData = (data) =>{
    const {current , forecast} = data;
    const updatedForcast = forecast?.forecastday[0]?.hour?.map(({time, temp_f,})=>{
        return {
            time,
            temp_f
        }
    })
    return {
        current: {curr_temp_f : current.temp_f},
        forecast : updatedForcast
    };
}

const getFormattedWeatherData = async(searchParams) =>{
    const formattedWeatherData = await getWeatherData(searchParams)
                                        .then(formattedData)
                                        .catch((e)=>{
                                            console.log("Error :  Failed to load the data")
                                        })
    return formattedWeatherData;
}

export default getFormattedWeatherData;