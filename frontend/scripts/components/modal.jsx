var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var BSModal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Alert = ReactBootstrap.Alert;

var Modal = React.createClass({
  getInitialState: function() {
    return {
      body: ""
    };
  },
  
  onInputClick: function(e) {
    this.setState({ body: e.target.value });
  },

  render: function() {
    var alert = this.state.body.length ? <Alert bsStyle="danger" > Oh fuck something went wrong</Alert> : null;
    
    return (
      <div>
        <BSModal.Dialog>
          <BSModal.Header>
            <BSModal.Title>{this.props.title}</BSModal.Title>
          </BSModal.Header>
    
          <BSModal.Body>
            {alert}
            Hello {this.state.body}
            <input style={{display: 'block'}} onChange={this.onInputClick} type="text" placeholder="Enter your name"></input>
          </BSModal.Body>

          <BSModal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </BSModal.Footer>
    
        </BSModal.Dialog>
      </div>
    );
  }
});

module.exports = Modal;
