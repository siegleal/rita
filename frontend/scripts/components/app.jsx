var React = require('react');
var Modal = require('./modal.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Modal title="Andrew is gay" />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
