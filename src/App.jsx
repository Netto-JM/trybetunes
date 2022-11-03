import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Album from './pages/Album';
import EditProfile from './pages/EditProfile';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {
  return (
    <Switch>
      <Route exact path="/search" component={ Search } />
      <Route exact path="/album/:id" component={ Album } />
      <Route exact path="/profile/edit" component={ EditProfile } />
      <Route exact path="/favorites" component={ Favorites } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/" component={ Home } />
      <Route path="*" component={ NoMatch } />
    </Switch>
  );
}

export default App;
