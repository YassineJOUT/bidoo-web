import React from "react";
import Login from "./pages/Login";
import { Router,Route } from 'react-router-dom';
import { history } from './utilities/history';
import Dashboard from "./pages/Dashboard";
const App: React.FC = () => {
  return (
    <div  >
      <Router history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/forgotpassword"  />
      </Router>
    </div>
  );
};

export default App;
