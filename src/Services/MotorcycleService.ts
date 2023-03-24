import * as mongoose from 'mongodb';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import CustomError from '../Utils/CustomError';

export default class MotorcycleService {
  motorcycleODM = new MotorcycleODM();

  async register(car: IMotorcycle): Promise<Motorcycle> {
    const newMotorcycle = await this.motorcycleODM.register(car);
    return new Motorcycle(newMotorcycle);
  }

  async getAll(): Promise<Motorcycle[]> {
    const motorcycle = await this.motorcycleODM.getAll();
    return motorcycle.map((car: IMotorcycle) => new Motorcycle(car));
  }

  async getById(id: string): Promise<Motorcycle> {
    const isValid = mongoose.ObjectId.isValid(id);
    if (!isValid) throw new CustomError(422, 'Invalid mongo id');
    const motorcycle = await this.motorcycleODM.getById(id);
    if (!motorcycle) throw new CustomError(404, 'Motorcycle not found');
    return new Motorcycle(motorcycle);
  }

  async updateById(id: string, update: IMotorcycle): Promise<Motorcycle> {
    const isValid = mongoose.ObjectId.isValid(id);
    if (!isValid) throw new CustomError(422, 'Invalid mongo id');
    const motorcycle = await this.motorcycleODM.updateById(id, update);
    if (!motorcycle) throw new CustomError(404, 'Motorcycle not found');
    return new Motorcycle(motorcycle);
  }
}