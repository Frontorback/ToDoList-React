import React from 'react'
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './Navigation/Header';
import Home from './Home/Home';
import Second from './Navigation/Second';
import ReduceAxios from './Notes/Reducer';
import AlertReducer from './Alert/AlertReducer';

function App() {
  return (
    <ReduceAxios>
      <AlertReducer>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/second' render={() => <Second />} />
          </Switch>
        </BrowserRouter>
      </AlertReducer>
    </ReduceAxios>
  )
}

export default App;
