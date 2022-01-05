import React from 'react';
import './App.scss';
import Wetter from './components/Wetter/Wetter';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { FormControl, IconButton, InputBase, InputBaseClassKey, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

var city:string = 'Berlin';
function App() {
  return (
    <>
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
                onKeyDown={keyInput}
                
              />
          </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="App">
        <Wetter city={city} />
      </div>
    </>
  );
}
function keyInput(event:React.KeyboardEvent<HTMLInputElement>) {
  if(event.key=='Enter') {
    console.log(event.target)
  }
}

export default App;
