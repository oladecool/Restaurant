import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test','https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/huli-huli-chicken-wings-ft-recipe0619.jpg?itok=4ltg7GWT.com/photo/several-people-dining-on-table-1893609/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
