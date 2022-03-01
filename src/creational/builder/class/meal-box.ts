import { MealCompositeProtocol } from '../interface/mel-composite-protocol';

//I don`t want extend AbstractMeal cuz my constrctor will change, put together other obj
export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
