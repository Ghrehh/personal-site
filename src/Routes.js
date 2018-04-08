// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import data from './data';
import * as projectRouterParams from 'models/project-router-params';
import * as pathsConstants from 'constants/paths';
import Projects from 'pages/Projects';
import Project from 'pages/Project';
import About from 'pages/About';

class Routes extends React.Component<{}> {
  renderProjects = ({ match }: { match: projectRouterParams.Type }) => (
    <Projects match={match} projects={data.projects} />
  );

  renderProject = ({ match }: { match: projectRouterParams.Type }) => (
    <Project match={match} projects={data.projects} />
  );

  render = () => (
    <Router>
      <React.Fragment>
        <Route exact path={pathsConstants.ABOUT} component={About} />
        <Route
          exact
          path={pathsConstants.PROJECTS}
          render={this.renderProjects}
        />
        <Route
          exact
          path={`${pathsConstants.PROJECTS}/:project`}
          render={this.renderProject}
        />
      </React.Fragment>
    </Router>
  );
}

export default Routes;
