import {Injectable} from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import{ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
   
  

    private recipes: Recipe[] = [
    new Recipe(
      'Veg Cheese Burger',
      'just awesome!',
      'http://www.pizzahunt.in/media/d516d7358f7600283d7a4e45e78bd4af.png',
      [
        new Ingredient('lettuce', 1),
        new Ingredient('Cheese slice',2),

      ]),
    new Recipe('Maxican Green Wave',
      'Yummy!!',
      'https://zoinkmediablog.files.wordpress.com/2012/03/mexican-green-wave_zoink.jpg',
      [
        new Ingredient('Pizza Base', 2),
        new Ingredient('Olives', 2),
        new Ingredient('jalapeno',1),
        new Ingredient('mozzarella',1)
      ])
  ];
  constructor(private shoppingListService :ShoppingListService ){}

  getRecipes(){
      return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
    addIngredientsToShoppingList(ingredient:Ingredient[]){
        this.shoppingListService.addIngredientsMultiple(ingredient);
    }
}




    

