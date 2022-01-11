import React from "react";
import './App.scss';
import Wetter from './components/Wetter/Wetter';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { IconButton, InputBase, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

let city : string = 'Berlin';

interface AppState {
  inputValue?:string,
  citySearch?:string,
}

class App extends React.Component<{}, AppState> {

  constructor() {
    super({});

    this.state = {
      inputValue: "",
      citySearch: "Berlin"
    }

  }

  onKeyDownInputCity = (event:React.KeyboardEvent) => {
    if (event.code === "Enter") {
      let t = event.target as HTMLInputElement

      this.setState({
        citySearch:t.value,
        inputValue:t.value
      });

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
                  value={this.state.inputValue}
                  onChange={e => this.setState({inputValue: e.target.value})}
                  onKeyDown={evt =>this.onKeyDownInputCity(evt)}
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
}

export default App;
