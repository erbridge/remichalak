import React from 'react';
import { matchPath } from 'react-router';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import ExpandingSection from './components/ExpandingSection';
import FadingSection from './components/FadingSection';
import Footer from './components/Footer';
import Head from './components/Head';
import Header from './components/Header';
import IndexPage from './components/IndexPage';
import MarkdownPage from './components/MarkdownPage';
import ProjectList from './components/ProjectList';
import ScrollToTop from './components/ScrollToTop';
import projects from './projects';
import routes, { mainRoutes, topRoutes } from './routes';

const topRoutesWithContentOrSubroutes = topRoutes.filter(
  ({ content, routes }) => content || (routes && routes.length),
);

const App = () => (
  <Router>
    <div className="App">
      <Head routes={routes} />
      <Header />
      <Body>
        {topRoutesWithContentOrSubroutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={({ location, match }) => (
              <ExpandingSection
                delayNextAnimation={Boolean(
                  [...topRoutesWithContentOrSubroutes, ...mainRoutes].find(
                    (r) =>
                      r.path !== route.path &&
                      matchPath(location.pathname, {
                        path: r.path,
                        exact: r.exact,
                      }),
                  ),
                )}
                expand={Boolean(match)}
              >
                {route.content && (
                  <MarkdownPage path={route.path} content={route.content} />
                )}
                {route.routes && route.routes.length && (
                  <IndexPage routes={route.routes} />
                )}
              </ExpandingSection>
            )}
          />
        ))}
        {mainRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={({ location, match }) => (
              <FadingSection
                delayNextAnimation={Boolean(
                  routes.find(
                    (r) =>
                      r.path !== route.path &&
                      matchPath(location.pathname, {
                        path: r.path,
                        exact: r.exact,
                      }),
                  ),
                )}
                visible={Boolean(match)}
              >
                <MarkdownPage path={route.path} content={route.content} />
              </FadingSection>
            )}
          />
        ))}
        <Route
          children={({ location }) => {
            const isOveridden = Boolean(
              mainRoutes.find((route) =>
                matchPath(location.pathname, {
                  path: route.path,
                  exact: route.exact,
                }),
              ),
            );

            return routes.find((route) =>
              matchPath(location.pathname, {
                path: route.path,
                exact: route.exact,
              }),
            ) ? (
              <FadingSection
                delayNextAnimation={isOveridden}
                visible={!isOveridden}
              >
                <ProjectList projects={projects || []} />
              </FadingSection>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      </Body>
      <Footer />
      <ScrollToTop />
    </div>
  </Router>
);

export default App;
