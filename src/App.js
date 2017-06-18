import React from 'react';
import { Helmet } from 'react-helmet';
import { matchPath } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import projects from './projects';
import routes, { mainRoutes, topRoutes } from './routes';

import ScrollToTop from './components/ScrollToTop';
import Body from './components/Body';
import ExpandingSection from './components/ExpandingSection';
import FadingSection from './components/FadingSection';
import Footer from './components/Footer';
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import MarkdownPage from './components/MarkdownPage';
import ProjectList from './components/ProjectList';

import './App.css';

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
                  [...topRoutesWithContentOrSubroutes, ...mainRoutes].find(
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
        {mainRoutes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            children={({ location, match }) =>
              <FadingSection
                delayNextAnimation={Boolean(
                  routes.find(
                    r =>
                      r.path !== route.path &&
                      matchPath(location.pathname, {
                        path: r.path,
                        exact: r.exact,
                        strict: r.strict,
                      }),
                  ),
                )}
                visible={Boolean(match)}
              >
                <MarkdownPage content={route.content} />
              </FadingSection>}
          />,
        )}
        <Route
          children={({ location, match }) => {
            const isOveridden = Boolean(
              mainRoutes.find(route =>
                matchPath(location.pathname, {
                  path: route.path,
                  exact: route.exact,
                  strict: route.strict,
                }),
              ),
            );

            return (
              <FadingSection
                delayNextAnimation={isOveridden}
                visible={!isOveridden}
              >
                <ProjectList projects={projects || []} />
              </FadingSection>
            );
          }}
        />
      </Body>
      <Footer />
      <ScrollToTop />
    </div>
  </Router>;

export default App;
