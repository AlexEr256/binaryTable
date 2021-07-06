import React from 'react';
import {Provider} from 'react-redux'
import { Route } from 'react-router';
import  BinaryTable  from './container/BinaryTable';
import store from './redux';
import header from './helpers/header';

import './custom.css'

export default function App(){
    return (
      <Provider store={store}>
          <Route exact path='/' component={() => <BinaryTable header={header}/>} />
      </Provider>
    );
}
