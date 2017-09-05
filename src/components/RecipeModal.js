import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class RecipeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
    
    this.handleToggle = this.handleToggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  handleToggle() {
    this.setState({ showModal:!this.state.showModal });
  }
  
  onSubmit() {
    const { submit, recipeIndex } = this.props;

    const recipeName = ReactDOM.findDOMNode(this.refs.recipeForm).value;
    const recipeIngredients = ReactDOM.findDOMNode(this.refs.ingredientsForm).value;
    const recipe = {name: recipeName, ingredients: recipeIngredients};

    submit(recipe, recipeIndex);
    this.handleToggle();
  }
  
  render() {
    const {title} = this.props;
    const {name, ingredients} = this.props.recipe;

    return (
      <div>
        <Button bsStyle="primary" onClick={this.handleToggle}>{title}</Button>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
              <FormGroup>
                <ControlLabel>Recipe</ControlLabel>
                <FormControl type="text" defaultValue={name} ref="recipeForm" placeholder="Recipe Name"/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl componentClass="textarea" defaultValue={ingredients} ref="ingredientsForm" placeholder="Enter Ingredients, separated by commas (,)"/>
              </FormGroup>
          </Modal.Body>
          
          <Modal.Footer>
            <ButtonToolbar>
              <Button bsSize="small" bsStyle="primary" onClick={this.onSubmit}>{title}</Button>
              <Button bsSize="small" onClick={this.handleToggle}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default RecipeModal;