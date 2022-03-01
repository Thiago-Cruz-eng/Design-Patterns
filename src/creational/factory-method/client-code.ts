import { randomCarAlgorithm } from './main/random-vehicle-algo';
import { randomNumber } from './utils/random-number';
import { Car } from './vehicle/car';

//the factory function will be great here for not repeat yourself
const fusca = new Car('Ford');
fusca.pickUp('Thiago');
fusca.stop();

//fatory method
const custumerClient = ['thiago', 'ana', 'rodrigo', 'sergio'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = custumerClient[randomNumber(custumerClient.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('-----');
}
