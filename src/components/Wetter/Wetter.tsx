import React from 'react';
import styles from './Wetter.module.scss'
import axios from 'axios';
import {weather} from '../../interface/weather';
import Card from '@mui/material/Card';
import {Avatar, CardContent, CardHeader} from '@mui/material';

const ApiKey = "d6971f3426dc09726ea595de7cf0dff6";

interface IProps {
    city: string | undefined
}

interface IState {
    weather?: weather | null,
    error?: null | number
}

class Wetter extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {}

    }

    componentDidMount() {
        if (this.props.city !== undefined) {
            this.getBackendAPI();
        }
    }

    componentDidUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any) {

        if (this.props.city !== nextProps.city) {
            this.getBackendAPI()
        }
    }


    getBackendAPI() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${ApiKey}&lang=de`).then((res) => {
            this.setState({
                weather: {
                    description: res.data["weather"][0]["description"],
                    icon: 'http://openweathermap.org/img/wn/' + res.data["weather"][0]["icon"] + ".png",
                    temperatur: res.data["main"]["temp"] - 273.15,
                    tempMin: res.data["main"]["temp_min"] - 273.15,
                    tempMax: res.data["main"]["temp_max"] - 273.15,
                    name: res.data["name"],
                    humidity: res.data["main"]["humidity"],
                    sunrise: new Date(res.data["sys"]["sunrise"] * 1000),
                    sunset: new Date(res.data["sys"]["sunset"] * 1000),
                }
            });
        }).catch((error) => {
            if (error.response.status !== 400) {
                this.setState({
                    weather: null,
                    error: error.response.status
                });
            }
        });
    }

    render() {
        if (this.state.weather != null) {
            return <Card className={styles.weatherCard}>
                <CardHeader
                    avatar={
                        <Avatar src={this.state.weather?.icon} alt={this.state.weather?.description}></Avatar>
                    }
                    title={this.state.weather?.name}>
                </CardHeader>
                <CardContent>
                    <p className={styles.head}>{this.state.weather?.description}</p>
                    <p>Temperatur: {this.state.weather?.temperatur.toFixed(2).replace('.', ',')}°C</p>
                    <p></p>
                </CardContent>
            </Card>
        } else {
            if (this.state.error === 404) {
                return <Card className={styles.weatherCard}>
                    <CardHeader
                        title={"City does not exist in Database"}
                    ></CardHeader>
                </Card>
            } else if (this.state.error === 401) {
                return <Card className={styles.weatherCard}>
                    <CardHeader
                        title={"Wrong API Key"}
                    ></CardHeader>
                </Card>
            } else if (this.state.error === 429) {
                return <Card className={styles.weatherCard}>
                    <CardHeader
                        title={"NO mor Calls available"}
                    ></CardHeader>
                </Card>
            } else if (this.state.error === 500 || this.state.error === 502 || this.state.error === 503 || this.state.error === 504) {
                return <Card className={styles.weatherCard}>
                    <CardHeader
                        title={"Serverproblem"}
                    ></CardHeader>
                </Card>
            } else {
                return <div>Netzwerkfehler</div>
            }

        }
    }
}

export default Wetter;
