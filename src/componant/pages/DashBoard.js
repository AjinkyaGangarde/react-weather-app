import React,{useState, useEffect} from 'react'
import _ from 'lodash'
import getFormattedWeatherData from '../../services/weatherService';
import Chart from '../common/Chart';
import LoadingSpinner from '../common/LoadingSpinner';

export default function DashBoard() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [isLoading,setIsLoading] = useState(false);
  
  useEffect(()=>{
    const fetchWeather = async () =>{
      setError({})
      setIsLoading(true);
      await getFormattedWeatherData({q:20171,days:1})
              .then((res)=>setData(res))
              .catch((e)=>{
                setData({});
                setError(e)
              });
      setIsLoading(false);
    }
    fetchWeather();
  },[]);

  if(_.isEmpty(data)){
    return null;
  }
  return (
    <div className='p-4 w-full'>
      <h3>Weather ForeCast</h3>
      <>
      {
        isLoading ? <LoadingSpinner /> :<Chart weatherData={data}/>
      }
      </>
    </div>
  )
}
