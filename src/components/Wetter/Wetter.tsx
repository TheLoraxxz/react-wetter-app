import React from 'react';
import styles from './Wetter.module.scss';
import axios from 'axios';
import { weather } from '../../interface/weather';

const ApiKey = "d6971f3426dc09726ea595de7cf0dff6";
class Wetter extends React.Component {
  cityWheather: weather|null = null;
  render() {
    this.getBackendAPI("Dresden");
    return <div className={styles.Wetter}>
              {this.cityWheather==null ? "":this.cityWheather.description} <button></button>
          </div>;
  }
  getBackendAPI(city:string){
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ApiKey).then((res)=>{
      this.cityWheather = {
        description: res.data["weather"][0]["description"],
        icon: res.data["weather"][0]["icon"],
        temperatur: res.data["main"]["temp"]-273.15,
        tempMin: res.data["main"]["temp_min"]-273.15,
        tempMax: res.data["main"]["temp_max"]-273.15,
        name: city,
        humidity:res.data["main"]["humidity"],
        sunrise: new Date(res.data["sys"]["sunrise"]*1000),
        sunset: new Date(res.data["sys"]["sunset"]*1000),
      }  
    })
  }
}
export default Wetter;
