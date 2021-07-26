import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test','test desc','https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-10.jpg')
  ];
  constructor() { }

  ngOnInit(){
  }
}
