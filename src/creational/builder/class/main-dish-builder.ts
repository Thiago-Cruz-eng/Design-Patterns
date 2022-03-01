import { MealBuilderProtocol } from '../interface/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('arroz carioca', 27.89);
    const beans = new Beans('feijao tropeiro', 10);
    const meat = new Meat('bife de ancho angus', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBevarege(): this {
    const beverage = new Beverage('vodka', 15);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('ice cream', 20);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
