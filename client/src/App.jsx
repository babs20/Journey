import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import ItineraryList from './components/ItineraryList';
import LeftNav from './components/LeftNav';
import Itinerary from './components/Itinerary';
import NewItineraryForm from './components/NewItineraryForm';
import MyItinerariesList from './components/MyItinerariesList';

function App() {
  const {
    state,
    dispatch,
    register,
    login,
    logout,
    createItinerary,
  } = useApplicationData();

  const { user, itineraries, myItineraries, key, itinerary } = state;

  return (
    <Router>
      <Nav user={user} logout={logout} dispatch={dispatch} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login onSave={login} dispatch={dispatch} />
        </Route>
        <Route path="/signup">
          <Register register={register} dispatch={dispatch} />
        </Route>
        <Route path={`/itineraries/new`}>
          {user.id && (
            <main className="flex">
              <LeftNav user={user} />
              <NewItineraryForm dispatch={dispatch} onSave={createItinerary} />
            </main>
          )}
        </Route>
        <Route path="/itineraries" exact>
          <ItineraryList key={key} itineraries={itineraries} />
        </Route>
        <Route path="/itineraries/:itinerary_id">
          <main className="flex">
            {state.itinerary && (
              <LeftNav user={user} itinerary={state.itinerary} />
            )}
            <Itinerary dispatch={dispatch} itinerary={itinerary} />
          </main>
        </Route>
        <Route path="/dashboard/:user_id">
          {user.id && (
            <main className="flex">
              <LeftNav user={user} itinerary={state.itinerary} />
              <MyItinerariesList myItineraries={myItineraries} user={user} />
            </main>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
