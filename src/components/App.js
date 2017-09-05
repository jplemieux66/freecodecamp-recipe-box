import React from 'react';
import { Component } from 'react';
import RecipesAccordion from './RecipesAccordion';
import defaultRecipes from './../default-recipes';

class App extends Component {
  constructor(props) {
    super(props);
    
    if (typeof(Storage) !== "undefined") {
      let localRecipes = localStorage.getItem("_jplemieux_recipes");
      if (localRecipes !== null){
        this.state = {
          recipes: JSON.parse(localRecipes)
        }
      } else {
        this.state = defaultRecipes;
      }
    } else {
      this.state = defaultRecipes;
    }

    this.onAddRecipe = this.onAddRecipe.bind(this);
    this.onEditRecipe = this.onEditRecipe.bind(this);
    this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
  }

  onAddRecipe(recipe, recipeIndex){
    this.setState({recipes: this.state.recipes.concat([recipe])});
  }

  onEditRecipe(recipe, recipeIndex) {
    let newRecipes = this.state.recipes.slice();
    newRecipes[recipeIndex] = recipe;
    this.setState({recipes: newRecipes});
  }

  onDeleteRecipe(recipeIndex) {
    return () => {
      let newRecipes = this.state.recipes.slice();
      newRecipes.splice(recipeIndex, 1);
      this.setState({recipes: newRecipes});
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("_jplemieux_recipes",JSON.stringify(nextState.recipes))
  }

  render() {
    return (
      <div id="container">
        <RecipesAccordion 
          recipes={this.state.recipes} 
          onAddRecipe={this.onAddRecipe} 
          onEditRecipe={this.onEditRecipe} 
          onDeleteRecipe={this.onDeleteRecipe} 
        />
      </div>
    );
  }
}

export default App;