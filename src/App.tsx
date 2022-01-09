import React from "react";
import './App.scss';
import Wetter from './components/Wetter/Wetter';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { IconButton, InputBase, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

var city:string = 'Berlin';
interface AppState {
  inputvalue?:string,
  citySearch?:string,
}
interface AppProps  {

}
class App extends React.Component<AppProps,AppState> {

  constructor() {
    let initAppState:AppState = {
      inputvalue:undefined,
      citySearch:"Berlin"
    }
    super(initAppState);
    this.state = {
      citySearch:"Berlin",
      inputvalue:undefined
    }

  }

  render() {
    return <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div className='searchField'>
              <div className='searchIcon'>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}>
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                  placeholder="Search City"
                  value={this.state.inputvalue}
                  onKeyDown={evt =>this.onKeyDownInputCity.bind(this)(evt)}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="App">
        <Wetter city={this.state.citySearch} />
      </div>
    </>;
  }
  onKeyDownInputCity(event:React.KeyboardEvent) {
    if (event.key==="Enter") {
      let t = event.target as HTMLInputElement
      this.state= {
        citySearch:t.value,
        inputvalue:t.value
      }
      console.log(this.state)
    }
  }
}

export default App;
