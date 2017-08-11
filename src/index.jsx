import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import PostIndex from './containers/PostIndex';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Hello!</div> }
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component = {Hello}/>
        <Route path="/goodbye" component = {Goodbye}/>
        <Route path="/" component = {PostIndex}/>
      </div>
    </BrowserRouter>
    {/* <App /> */}
  </Provider>
  , document.querySelector('.container'));
