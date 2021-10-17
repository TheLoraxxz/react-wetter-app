import React from 'react';
import styles from './Wetter.module.scss';
import axios from 'axios';

const ApiKey = "d6971f3426dc09726ea595de7cf0dff6";
class Wetter extends React.Component {
  render() {
    return <div className={styles.Wetter}>
              Test
          </div>;
  }
  getBackendAPI(){
    axios.get("") 
  }
}

export default Wetter;
