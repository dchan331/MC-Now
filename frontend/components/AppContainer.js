import React from 'react';
import { BrowserRouter, history } from 'react-router-dom';

import Header from './header';
import Routes from '../routes';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter history={history}>
          <div>
            <Header/>
            {Routes}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
