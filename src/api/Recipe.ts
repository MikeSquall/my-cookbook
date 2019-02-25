export interface Recipe {
  recipeId: number;
  title: string;
  rate: Rate;
  ingredients: Ingredient[];
  steps: string[];
  description?: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
  units: Units;
}

type Units = 'piece' | 'pieces' | 'gr' | 'ml';

interface Rate {
  notes: number[];
  votes: number;
}
