import React from 'react';
import { matchPath } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { topRoutes } from './routes';

import Body from './components/Body';
import ExpandingSection from './components/ExpandingSection';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

import './App.css';

const topRoutesWithSections = topRoutes.filter(({ section }) => section);

const App = () =>
  <Router>
    <div className="App">
      <Header />
      <Body>
        {topRoutesWithSections.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            children={({ location, match }) =>
              <ExpandingSection
                delayNextAnimation={Boolean(topRoutesWithSections.find(r =>
                  r.path !== route.path && matchPath(location.pathname, {
                    path: r.path,
                    exact: r.exact,
                    strict: r.strict,
                  }),
                ))}
                expand={Boolean(match)}
              >
                <route.section />
              </ExpandingSection>}
          />,
        )}
        <ProjectList />
      </Body>
    </div>
  </Router>;

export default App;
