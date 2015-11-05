var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createHistory = require('history/lib/createBrowserHistory');

var App = require('./components/app.jsx');
var NotFound = require('./components/notFound.jsx');

ReactDOM.render(
  <Router history={createHistory()}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);
