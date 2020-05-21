import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';
import { HomeTemplate } from './templates/HomeTempate';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* truyen props de redux */}
          <HomeTemplate exact path="/" Component={Home} />} } />
          <HomeTemplate exact path="/home" Component={Home} />} } />
          <HomeTemplate exact path="/detail-movie/:id" Component={DetailMovie} />
          <Route exact path="/login" render = {(props) => { return <Login {...props} /> }} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
