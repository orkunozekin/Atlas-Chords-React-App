import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './Sign-Up'
import { Router } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



