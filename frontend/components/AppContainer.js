import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Routes from '../routes';

const App = (/* props OR { prop1, prop2 } */) => (
  <div>
    <Header/>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </div>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});



export default connect(mapStateToProps, mapDispatchToProps)(App);;
