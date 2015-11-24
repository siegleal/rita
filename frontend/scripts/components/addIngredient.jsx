var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var $ = require('jquery');
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;
var AddRemoveIcon = require('./addRemoveIcon.jsx');

var defaultDrinkName = 'default';

var AddIngredient = React.createClass({
  getInitialState: function() {
    return {
      drink: defaultDrinkName,
      number: 1,
      disabled: true
    };
  },

  handleDrinkSelect: function(e) {
    var drink = e.target.value;
    this.setState({
      drink: drink,
      disabled: drink === defaultDrinkName
    });
  },
  
  handleNumberChange: function(e) {
    this.setState({
      number: e.target.value
    });
  },
  
  handleAdd: function() {
    if(!this.state.disabled) {
      this.props.onAdd(this.state.drink.slice(1), this.state.number);
      this.setState(this.getInitialState());
    }
  },

  render: function() {
    var options = [];
    this.props.ingredients.forEach(function(ingredient) {
      options.push(<option key={ingredient} value={"_" + ingredient} >{ingredient}</option>);
    });
    
    return (
      <Row>
        <Col xs={8}>
          <Input ref="select" type="select" placeholder={defaultDrinkName} onChange={this.handleDrinkSelect}>
            <option value={defaultDrinkName}>Pick a drink...</option>
            {options}
          </Input>
        </Col>
        <Col xs={2}>
          <Input type="number" defaultValue={1} min={1} onChange={this.handleNumberChange} />
        </Col>
        <Col xs={2}>
          <AddRemoveIcon onClick={this.handleAdd} disabled={this.state.disabled} />
        </Col>
      </Row>
    );
  }
});

module.exports = AddIngredient;
