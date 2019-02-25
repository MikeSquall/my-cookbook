import { from } from 'rxjs';
import {
  RateRequest,
  RecipeRequest,
  RecipeResponse,
  Recipes as RecipesInterface,
  RecipesRequest,
  RecipesResponse,
  SaveRequest,
} from './api/Recipes';

export default class Recipes implements RecipesInterface {
  public recipes$(recipesRequest: RecipesRequest): RecipesResponse {
    return from([]);
  }

  public recipe(recipeRequest: RecipeRequest): RecipeResponse {
    return Promise.resolve({
      recipeId: 0,
      title: 'tmp',
      rate: {
        notes: [5],
        votes: 1,
      },
      ingredients: [
        {
          name: 'eau',
          quantity: 100,
          units: 'ml' as 'ml',
        },
      ],
      steps: ['step 1'],
    });
  }

  public save(saveRequest: SaveRequest): Promise<void> {
    return Promise.resolve();
  }

  public rate(rateRequest: RateRequest): RecipeResponse {
    return Promise.resolve({
      recipeId: 0,
      title: 'tmp',
      rate: {
        notes: [5],
        votes: 1,
      },
      ingredients: [
        {
          name: 'eau',
          quantity: 100,
          units: 'ml' as 'ml',
        },
      ],
      steps: ['step 1'],
    });
  }
}
