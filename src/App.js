import React from 'react';
import { Helmet } from 'react-helmet';
import { matchPath } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes, { blogRoutes, topRoutes } from './routes';

import Body from './components/Body';
import ExpandingSection from './components/ExpandingSection';
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import MarkdownPage from './components/MarkdownPage';
import ProjectList from './components/ProjectList';

const topRoutesWithContentOrSubroutes = topRoutes.filter(
  ({ content, routes }) => content || (routes && routes.length),
);

const App = () =>
  <Router>
    <div className="App">
      {routes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={() =>
            <Helmet>
              <title>{route.title ? `${route.title} | ` : ''}remichalak</title>
            </Helmet>}
        />,
      )}
      <Header />
      <Body>
        {topRoutesWithContentOrSubroutes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            children={({ location, match }) =>
              <ExpandingSection
                delayNextAnimation={Boolean(
                  topRoutesWithContentOrSubroutes.find(
                    r =>
                      r.path !== route.path &&
                      matchPath(location.pathname, {
                        path: r.path,
                        exact: r.exact,
                        strict: r.strict,
                      }),
                  ),
                )}
                expand={Boolean(match)}
              >
                {route.content && <MarkdownPage content={route.content} />}
                {route.routes &&
                  route.routes.length &&
                  <IndexPage routes={route.routes} />}
              </ExpandingSection>}
          />,
        )}
        <Switch>
          {blogRoutes.map((route, index) =>
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={() => <MarkdownPage content={route.content} />}
            />,
          )}
          <Route render={() => <ProjectList />} />
        </Switch>
      </Body>
    </div>
  </Router>;

export default App;
