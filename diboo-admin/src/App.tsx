import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import { Router, Route, Redirect } from "react-router-dom";
import { history } from "./utilities/history";
import Dashboard from "./pages/Dashboard";
import Carousel from "./pages/Carousel";
import SiteSettings from "./pages/SiteSettings";
import CommissionSettings from "./pages/CommissionSettings";
import AddRestaurant from "./pages/AddRestaurant";
import ManageRestaurants from "./pages/ManageRestaurants";
import OrderReports from "./pages/OrderReports";
import Kitchen from "./pages/Kitchen";
import Categories from "./pages/Categories";
import Items from "./pages/Items";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import GuestOrders from "./pages/GuestOrders";
import CustomerOrders from "./pages/CustomerOrders";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  Context,
  loadState,
} from "./utilities/useAuth";

import './App.css';
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./utilities/protectedRoute";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  uri: "http://localhost:3005/graphql",
  credentials: "include",
});

export const client = new ApolloClient({
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
            <Route
              path="/"
              exact
              component={() => (
                <Redirect
                  to={context.contextState.isLogged ? "/dashboard" : "login"}
                />
              )}
            />
            <Route path="/login" exact component={Login} />
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/dashboard"
              component={Dashboard}
            />
            {/* <Route path="/" exact component={Dashboard} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/carousel"
              component={Carousel}
            />
            {/* <Route path="/carousel" exact component={Carousel} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/site-settings"
              component={SiteSettings}
            />
            {/* <Route path="/site-settings" exact component={SiteSettings} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/commission-settings"
              component={CommissionSettings}
            />
            {/* <Route
            path="/commission-settings"
            exact
            component={CommissionSettings}
          /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/add-restaurant/:id?"
              component={AddRestaurant}
            />
            {/* <Route path="/add-restaurant" exact component={AddRestaurant} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/manage-restaurants"
              component={ManageRestaurants}
            />
            {/* <Route
            path="/manage-restaurants"
            exact
            component={ManageRestaurants}
          /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/order-reports"
              component={OrderReports}
            />
            {/* <Route path="/order-reports" exact component={OrderReports} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/kitchen"
              component={Kitchen}
            />
            {/* <Route path="/kitchen" exact component={Kitchen} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/menu-categories"
              component={Categories}
            />
            {/* <Route path="/menu-categories" exact component={Categories} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/category-items"
              component={Items}
            />
            {/* <Route path="/category-items" exact component={Items} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/Customer"
              component={Customers}
            />
            {/* <Route path="/customer" exact component={Customers} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/track-payment"
              component={Payments}
            />
            {/* <Route path="/track-payment" exact component={Payments} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/orders"
              component={CustomerOrders}
            />
            {/* <Route path="/orders" exact component={CustomerOrders} /> */}
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/orders-guest"
              component={GuestOrders}
            />
            {/* <Route path="/orders-guest" exact component={GuestOrders} /> */}
            {/* <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/forgotpassword"
            component={Carousel}
          />
          <Route path="/forgotpassword" /> */}
          </Router>
        </div>
      </ApolloProvider>
    </Context.Provider>
  );
};

export default App;
