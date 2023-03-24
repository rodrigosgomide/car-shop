import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  constructor(newMotorcycle: IMotorcycle) {
    super(newMotorcycle);
    this.category = newMotorcycle.category;
    this.engineCapacity = newMotorcycle.engineCapacity;
  }

  public set setCategory(category: string) {
    this.category = category;
  }

  public get getCategory() {
    return this.category;
  }

  public set setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public get getEngineCapacity() {
    return this.engineCapacity;
  }
}