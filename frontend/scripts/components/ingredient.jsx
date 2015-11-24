var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;
var AddRemoveIcon = require('./addRemoveIcon.jsx');

var Ingredient = React.createClass({
  handleRemove: function() {
    this.props.onRemove(this.props.drink);
  },

  render: function() {
    return (
      <Row>
        <Col xs={8}>
          <span>{this.props.drink}</span>
        </Col>
        <Col xs={2}>
          <span>{this.props.number}</span>
        </Col>
        <Col xs={2}>
          <AddRemoveIcon minus={true} onClick={this.handleRemove} />
        </Col>
      </Row>
    );
  }
});

module.exports = Ingredient;
