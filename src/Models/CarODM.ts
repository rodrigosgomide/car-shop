import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  schema: Schema;
  model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Car || model<ICar>('Car', this.schema);
  }

  async registerNewCar(car: ICar): Promise<ICar> {
    const newCar = await this.model.create(car);
    return newCar;
  }

  async getAllCars(): Promise<ICar[]> {
    const cars = await this.model.find({});
    return cars;
  }

  async getCarById(id: string): Promise<ICar | null> {
    const car = await this.model.findById(id);
    
    return car;
  }

  async updateCarById(id: string, update: ICar): Promise<ICar | null> {
    const car = await this.model.findByIdAndUpdate(id, update, { new: true });
    
    return car;
  }
}