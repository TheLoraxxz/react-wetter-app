import React from 'react';
import styles from './Wetter.module.scss'
import axios from 'axios';
import { weather } from '../../interface/weather';
import Card from '@mui/material/Card';
import { Avatar, CardContent, CardHeader } from '@mui/material';
const ApiKey = "d6971f3426dc09726ea595de7cf0dff6";

interface IProps {
  city: string
}

interface IState {
  weather?: weather
}
class Wetter extends React.Component<IProps, IState> {
  cityWheather: weather|null = null;

  constructor(props : IProps) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.getBackendAPI(this.props.city);
  }

  render() {
    return <Card className={styles.weatherCard}>
              <CardHeader
                avatar = {
                  <Avatar src={this.state.weather?.icon} alt={this.state.weather?.description}></Avatar>
                }
                title={this.state.weather?.name}></CardHeader>
              <CardContent>
                <p className={styles.head}>{this.state.weather?.description}</p>
                <p>Temperatur: {this.state.weather?.temperatur.toFixed(2).replace('.',',')}°C</p>
                <p></p>

              </CardContent>
          </Card>;
  }
  getBackendAPI(city:string){
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ApiKey+"&lang=de").then((res)=>{
      this.setState({
        weather: {
          description: res.data["weather"][0]["description"],
          icon: 'http://openweathermap.org/img/wn/'+res.data["weather"][0]["icon"]+".png",
          temperatur: res.data["main"]["temp"]-273.15,
          tempMin: res.data["main"]["temp_min"]-273.15,
          tempMax: res.data["main"]["temp_max"]-273.15,
          name: res.data["name"],
          humidity:res.data["main"]["humidity"],
          sunrise: new Date(res.data["sys"]["sunrise"]*1000),
          sunset: new Date(res.data["sys"]["sunset"]*1000),
        }
      });
    });
  }
}

export default Wetter;
