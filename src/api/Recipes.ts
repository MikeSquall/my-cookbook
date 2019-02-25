import { Observable } from 'rxjs';
import { Ingredient, Recipe } from './Recipe';
/**
 * Recipes provides public methods to manage the recipes.
 */

export interface Recipes {
  /**
   * This method provides a stream of recipes
   */
  recipes$: (recipesRequest: RecipesRequest) => RecipesResponse;
  /**
   * This method returns the selected recipe
   */
  recipe: (recipeRequest: RecipeRequest) => RecipeResponse;
  /**
   * This method create or update a specific recipe
   */
  save: (saveRequest: SaveRequest) => Promise<void>;
  /**
   * This method add a rate to a recipe
   */
  rate: (rateRequest: RateRequest) => RecipeResponse;
}

export interface RecipesRequest {}

export type RecipesResponse = Observable<Recipe>;

export interface RecipeRequest {
  recipeId: number;
}

export type RecipeResponse = Promise<Recipe>;

export interface SaveRequest {
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  description?: string;
}

export interface RateRequest {
  note: number;
  recipeId: number;
}
