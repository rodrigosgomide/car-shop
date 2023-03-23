import Car from '../../src/Domains/Car';

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

export const newCarInput = {
  model: 'Marea Turbo',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};