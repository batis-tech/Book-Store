import { EventEmitter , Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schintzzel',
    'A super-tasty Schintzzel - just awesome !',
    'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-10.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('Big fat burger',
    'What else you need to ssay?',
    'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-10.jpg',
    [
      new Ingredient('buns',2),
      new Ingredient('meat',1)
    ])
  ];
  constructor(private slService: ShoppingListService){}
  getRecipes(){
     return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index]
  }
  addIngredientToShoppintList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }
}
