import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import Profile from '../pages/Profile';
import Account from '../pages/Account';
import NewRecipe from '../pages/NewRecipe';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/recipe/:id" component={Recipe} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/account" component={Account} isPrivate />
      <Route path="/new" component={NewRecipe} isPrivate />
    </Switch>
  );
}
