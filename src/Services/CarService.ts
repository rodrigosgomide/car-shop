import * as mongoose from 'mongodb';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CustomError from '../Utils/CustomError';

export default class CarService {
  carODM = new CarODM();

  async register(car: ICar): Promise<Car> {
    const newCar = await this.carODM.register(car);
    return new Car(newCar);
  }

  async getAll(): Promise<Car[]> {
    const cars = await this.carODM.getAll();
    return cars.map((car: ICar) => new Car(car));
  }

  async getById(id: string): Promise<Car> {
    const isValid = mongoose.ObjectId.isValid(id);
    if (!isValid) throw new CustomError(422, 'Invalid mongo id');
    const car = await this.carODM.getById(id);
    if (!car) throw new CustomError(404, 'Car not found');
    return new Car(car);
  }

  async updateById(id: string, update: ICar): Promise<Car> {
    const isValid = mongoose.ObjectId.isValid(id);
    if (!isValid) throw new CustomError(422, 'Invalid mongo id');
    const car = await this.carODM.updateById(id, update);
    if (!car) throw new CustomError(404, 'Car not found');
    return new Car(car);
  }
}