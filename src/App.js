import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { topRoutes } from './routes';

import Body from './components/Body';
import ExpandingSection from './components/ExpandingSection';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

import './App.css';

const App = () =>
  <Router>
    <div className="App">
      <Header />
      <Body>
        {topRoutes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={({ match }) =>
              <div>
                {route.section &&
                  <ExpandingSection expand={Boolean(match)}>
                    <route.section />
                  </ExpandingSection>}
              </div>}
          />,
        )}
        <ProjectList />
      </Body>
    </div>
  </Router>;

export default App;
