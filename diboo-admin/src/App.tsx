import React from "react";
import Login from "./pages/Login";
import { Router, Route } from "react-router-dom";
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
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

const link = createHttpLink({
  uri: 'http://localhost:3005/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  
});


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router history={history}>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/carousel" exact component={Carousel} />
          <Route path="/site-settings" exact component={SiteSettings} />
          <Route
            path="/commission-settings"
            exact
            component={CommissionSettings}
          />
          <Route path="/add-restaurant" exact component={AddRestaurant} />
          <Route
            path="/manage-restaurants"
            exact
            component={ManageRestaurants}
          />
          <Route path="/order-reports" exact component={OrderReports} />
          <Route path="/kitchen" exact component={Kitchen} />
          <Route path="/menu-categories" exact component={Categories} />
          <Route path="/category-items" exact component={Items} />
          <Route path="/customer" exact component={Customers} />
          <Route path="/track-payment" exact component={Payments} />
          <Route path="/orders" exact component={CustomerOrders} />
          <Route path="/orders-guest" exact component={GuestOrders} />
          <Route path="/forgotpassword" />
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
