import { CarFactory } from '../factories/car-fatory';
import { BicycleFactory } from '../factories/bicycle-factory';
import { Vehicle } from '../vehicle/vehicle';
import { randomNumber } from '../utils/random-number';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bikeFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bike = bikeFactory.getVehicle('Caloi 101');
  const cars = [car1, car2, bike];
  return cars[randomNumber(cars.length)];
}
