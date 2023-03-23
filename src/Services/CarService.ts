import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  async registerNewCar(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const newCar = await carODM.registerNewCar(car);
    return new Car(newCar);
  }
}