import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
export const userContext = createContext();
const App = () => {
  const [search, setSearch] = useState("")
  return (
    <userContext.Provider value={[search, setSearch]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/details/:id">
            <Details/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
};

export default App;