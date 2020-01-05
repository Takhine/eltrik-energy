import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home/index.js';
import Layout from './Layout/index';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route render={({ location }) => (

                <Switch location={location}>
                  <Redirect exact from="/" to="/home" />
                  <Route path="/home" exact component={Home} />
                </Switch>
        )} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
