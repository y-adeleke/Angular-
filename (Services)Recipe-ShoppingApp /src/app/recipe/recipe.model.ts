import { Ingridients } from '../shared/ingridients.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingridients[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingridients[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
