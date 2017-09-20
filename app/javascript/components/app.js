import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import RootContainer from './containers/rootContainer';
import Hello from '../components/hello';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Hello />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(RootContainer);

if (module.hot) {
  module.hot.accept('./containers/rootContainer.js', () => {
    const NextRootContainer = require('./containers/rootContainer').default;
    render(NextRootContainer);
  });
}
