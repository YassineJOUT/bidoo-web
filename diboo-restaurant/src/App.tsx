import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import { Router, Route, Redirect } from "react-router-dom";
import { history } from "./utilities/history";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { Context, loadState } from "./utilities/useAuth";

import "./App.css";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./utilities/protectedRoute";
import { createUploadLink } from "apollo-upload-client";
import SideBar from "./components/Shared/SideBar";
import Dashboard from "./pages/Dashboard";

const link = createUploadLink({
  uri: "http://localhost:3005/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
const loadedState = loadState();
const App: React.FC = () => {
  const [context, setContext] = useState<Context>(loadedState);
  // console.log('state');
  // console.log(context);

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: context.contextState.isLogged,
    authenticationPath: "/",
  };
  return (
    <Context.Provider value={{ ...context, setContext }}>
      <ApolloProvider client={client}>
        <div>
          <Router history={history}>
            {/* <Route
              path="/"
              exact
              component={() => (
                <Redirect
                  to={context.contextState.isLogged ? "/dashboard" : "/dashboard"}
                />
              )}
            /> */}
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            {/* <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/dashboard"
              component={Dashboard}
            /> */}
          </Router>
        </div>
      </ApolloProvider>
    </Context.Provider>
  );
};

export default App;
