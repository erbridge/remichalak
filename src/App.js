import React from 'react';
import { Helmet } from 'react-helmet';
import { matchPath } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { topRoutes } from './routes';

import Body from './components/Body';
import ExpandingSection from './components/ExpandingSection';
import Header from './components/Header';
import MarkdownPage from './components/MarkdownPage';
import ProjectList from './components/ProjectList';

const topRoutesWithContent = topRoutes.filter(({ content }) => content);

const App = () =>
  <Router>
    <div className="App">
      {topRoutes.map((route, index) =>
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
        {topRoutesWithContent.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            children={({ location, match }) =>
              <ExpandingSection
                delayNextAnimation={Boolean(
                  topRoutesWithContent.find(
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
                <MarkdownPage content={route.content} />
              </ExpandingSection>}
          />,
        )}
        <ProjectList />
      </Body>
    </div>
  </Router>;

export default App;
