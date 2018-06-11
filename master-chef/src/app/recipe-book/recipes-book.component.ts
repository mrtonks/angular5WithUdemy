import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipes-book',
    templateUrl: './recipes-book.component.html',
    styleUrls: ['./recipes-book.component.css']
})
export class RecipesBookComponent {
    selectedRecipe: Recipe;
}