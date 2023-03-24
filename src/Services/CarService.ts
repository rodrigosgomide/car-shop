import * as mongoose from 'mongodb';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CustomError from '../Utils/CustomError';

export default class CarService {
  carODM = new CarODM();

  async registerNewCar(car: ICar): Promise<Car> {
    const newCar = await this.carODM.registerNewCar(car);
    return new Car(newCar);
  }

  async getAllCars(): Promise<Car[]> {
    const cars = await this.carODM.getAllCars();
    return cars.map((car: ICar) => new Car(car));
  }

  async getCarById(id: string): Promise<Car> {
    const isValid = mongoose.ObjectId.isValid(id);
    if (!isValid) throw new CustomError(422, 'Invalid mongo id');
    const car = await this.carODM.getCarById(id);
    if (!car) throw new CustomError(404, 'Car not found');
    return new Car(car);
  }

  async updateCarById(id: string, update: ICar): Promise<Car> {
    const isValid = mongoose.ObjectId.isValid(id);
    if (!isValid) throw new CustomError(422, 'Invalid mongo id');
    const car = await this.carODM.updateCarById(id, update);
    if (!car) throw new CustomError(404, 'Car not found');
    return new Car(car);
  }
}