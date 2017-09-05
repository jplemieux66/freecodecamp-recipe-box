import React from 'react';
import { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import generateRecipePanel from './RecipePanel';
import RecipeModal from './RecipeModal';

class RecipesAccordion extends React.Component {
  constructor(props) {
    super(props);

    this.renderAllRecipePanels = this.renderAllRecipePanels.bind(this);
  }

  createRecipe() {
    return {
      name: "",
      ingredients: ""
    }
  }

  renderAllRecipePanels() {
    const { recipes, onEditRecipe, onDeleteRecipe } = this.props;

    return recipes.map((cur, index) => (
      generateRecipePanel(cur, index, onDeleteRecipe, onEditRecipe)
    ));
  }
  
  render() {
    const { onAddRecipe } = this.props;

    return (
      <div>
        <Accordion>
          {this.renderAllRecipePanels()}
        </Accordion>
        <RecipeModal title="Add Recipe" submit={onAddRecipe} recipe={this.createRecipe()}/>
      </div>
    );
  }
}

export default RecipesAccordion;