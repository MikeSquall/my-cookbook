import Recipes from '../src';

describe('Recipes test suite', () => {
  let recipes: Recipes;

  beforeEach(() => {
    localStorage.clear();
    recipes = new Recipes();
  });

  it('should return all stored recipes', () => {});

  it('should return a specific recipe', () => {});

  it('should throw error when trying to select non existing recipe', () => {});

  it('should throw error when trying to select recipe with bad request', () => {});

  it('should create a new recipe', () => {});

  it('should update an existing recipe', () => {});

  it('should throw error when trying to save recipe with bad request', () => {});

  it('should update the rate of a specific recipe', () => {});

  it('should throw error when trying to rate recipe with bad request', () => {});

  it('should throw error when trying to rate non existing recipe', () => {});
});
