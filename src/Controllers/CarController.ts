import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async registerNewCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    
    try {
      const newCar = await this.service.registerNewCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  async getAllCars() {
    try {
      const cars = await this.service.getAllCars();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  async getCarById() {
    const { id } = this.req.params;
    try {
      const cars = await this.service.getCarById(id);
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }
}