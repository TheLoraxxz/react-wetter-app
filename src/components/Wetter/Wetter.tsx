import React from 'react';
import styles from './Wetter.module.scss'
import axios from 'axios';
import { weather } from '../../interface/weather';
import Card from '@mui/material/Card';
import { Avatar, CardContent, CardHeader } from '@mui/material';
const ApiKey = "d6971f3426dc09726ea595de7cf0dff6";

interface IProps {
  city: string |undefined
}

interface IState {
  weather?: weather |null
}
class Wetter extends React.Component<IProps, IState> {

  constructor(props : IProps) {
    super(props);

    this.state = {

    }

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


  render() {
    if ( this.state.weather!=null) {
      return <Card className={styles.weatherCard}>
            <CardHeader
                  avatar = {
                    <Avatar src={this.state.weather?.icon} alt={this.state.weather?.description}></Avatar>
                  }
                  title={this.state.weather?.name}>
            </CardHeader>
            <CardContent>
              <p className={styles.head}>{this.state.weather?.description}</p>
              <p>Temperatur: {this.state.weather?.temperatur.toFixed(2).replace('.',',')}°C</p>
              <p></p>
            </CardContent>
        </Card>
      } else {
        return <div>Netzwerkfehler</div>
    }
  }
}

export default Wetter;
