import React from 'react';
import styles from './App.module.css';
import { Detail, Home, Login, Register } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:touristRouteId" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
