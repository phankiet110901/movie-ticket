import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home';
import CumRap from './pages/CumRap';
import TinTuc from './pages/TinTuc';
import {HomeTemplate} from './templates/HomeTempate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* truyen props de redux */}
          <HomeTemplate exact path = "/" Component = {Home} />} } />
          <HomeTemplate exact path = "/cumrap" Component = {CumRap}></HomeTemplate>
          <HomeTemplate exact path = "/tintuc" Component = {TinTuc}></HomeTemplate>
          <HomeTemplate exact path = "/home" Component = {Home} />} } />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
