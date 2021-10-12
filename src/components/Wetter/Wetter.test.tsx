import React from 'react';
import ReactDOM from 'react-dom';
import Wetter from './Wetter';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wetter />, div);
  ReactDOM.unmountComponentAtNode(div);
});