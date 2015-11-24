var React = require('react');
var classnames = require('classnames');

var AddRemoveIcon = React.createClass({
  handleClick: function(e) {
    this.props.onClick(e);
  },

  render: function() {
    var iconName = this.props.minus ? 'minus' : 'plus';
    var cn = classnames('fa fa-' + iconName + '-circle add-ingredient-icon', { disabled: this.props.disabled });

    return (
      <i className={cn} onClick={this.handleClick}></i>
    );
  }
});

module.exports = AddRemoveIcon;
