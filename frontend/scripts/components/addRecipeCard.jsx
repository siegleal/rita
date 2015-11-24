var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var _ = require('lodash');
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Ingredient = require('./ingredient.jsx');
var AddIngredient = require('./addIngredient.jsx');

var AddRecipeCard = React.createClass({
  getInitialState() {
    return {
      showModal: false,
      ingredients: [],
      possibleIngredients: ['vodka', 'rum', 'tequila', 'gin']
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
  
  onAddIngredient: function(drink, number) {
    this.setState({
      ingredients: this.state.ingredients.concat([{
        drink: drink,
        number: number
      }]),
      possibleIngredients: _.reject(this.state.possibleIngredients, function(x) { return x === drink})
    });
  },
  
  onRemoveIngredient: function(drink) {
    this.setState({
      ingredients: _.reject(this.state.ingredients, { drink: drink }),
      possibleIngredients: this.state.possibleIngredients.concat([drink])
    });
  },

  render: function() {
    var ingredients = [];
    this.state.ingredients.forEach(function(ingredient) {
      ingredients.push(
        <Ingredient
          key={ingredient.drink}
          drink={ingredient.drink}
          number={ingredient.number}
          onRemove={this.onRemoveIngredient}
        />
      );
    }.bind(this));
  
    return (
      <div>
        <ListGroupItem bsStyle="success" className="add-recipe-card no-select" onClick={this.open}>
          <i className="fa fa-plus-circle add-recipe-icon"></i>
        </ListGroupItem>
        
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {ingredients}
            <AddIngredient ingredients={this.state.possibleIngredients} onAdd={this.onAddIngredient} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = AddRecipeCard;
