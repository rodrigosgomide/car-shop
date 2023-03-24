import Car from '../../src/Domains/Car';
import Motorcycle from '../../src/Domains/Motorcycle';
import ICar from '../../src/Interfaces/ICar';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

export const validId = '641cba1701c5db0f8aa43123';
export const invalidId = 'invalidId';

export const car = new Car({
  id: validId,
  model: 'Marea Turbo',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

export const newCarInput : ICar = {
  model: 'Marea Turbo',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const updateCarInput : ICar = {
  model: 'Gol',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const updatedCar = new Car({
  id: validId,
  model: 'Gol',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

export const motorcycle = new Motorcycle({
  id: validId,
  model: 'Moto',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  category: 'Street',
  engineCapacity: 10,
});

export const newMotorcycleInput: IMotorcycle = {
  model: 'Moto',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  category: 'Street',
  engineCapacity: 10,
};

export const updateMotorcycleInput: IMotorcycle = {
  model: 'Moto 2',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  category: 'Street',
  engineCapacity: 10,
};

export const updatedMotorcycle = new Motorcycle({
  id: validId,
  model: 'Moto 2',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  category: 'Street',
  engineCapacity: 10,
});