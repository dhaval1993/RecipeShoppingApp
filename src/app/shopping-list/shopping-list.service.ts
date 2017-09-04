import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    
  ingridientChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
    
    constructor(){

    }
    getIngredients(){
        return this.ingredients.slice();
    } 
    addIngredients(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingridientChanged.emit(this.ingredients.slice());
  }
    addIngredientsMultiple(ingredient:Ingredient[]){
      //for(let ing of ingredient){
        //this.addIngredients(ing);
      this.ingredients.push(...ingredient);
      this.ingridientChanged.emit(this.ingredients.slice());
      }
  }
