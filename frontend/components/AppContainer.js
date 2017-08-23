import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Routes from '../routes';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
