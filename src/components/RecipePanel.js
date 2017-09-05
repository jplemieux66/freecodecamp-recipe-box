import React from 'react';
import { Component } from 'react';
import { Panel, Accordion, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal';

const generateRecipePanel = (recipe, index, onDeleteRecipe, onEditRecipe) => {
  var header = <h4 className="recipe-header">{recipe.name}</h4>;
  const ingredients = recipe.ingredients.split(',');

  return (
    <Panel bsStyle="info" header={header} eventKey={index} key={index}>
      <h4 className="ingredients-header">Ingredients</h4>
      <hr />
      <ListGroup>
        {ingredients.map((cur, index) => { return <ListGroupItem key={index}>{cur}</ListGroupItem> })}
      </ListGroup>
      <ButtonToolbar>
        <Button className="delete-button" bsStyle="danger" onClick={onDeleteRecipe(index)}>Delete</Button>
        <RecipeModal title="Edit Recipe" submit={onEditRecipe} recipe={recipe} recipeIndex={index}/>
      </ButtonToolbar>
    </Panel>
  );
};

export default generateRecipePanel;