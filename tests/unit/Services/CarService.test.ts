import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import CustomError from '../../../src/Utils/CustomError';
import { 
  car, 
  invalidId, 
  newCarInput, 
  updateCarInput, 
  updatedCar, 
  validId, 
} from '../../mocks/mocks';

describe('CarService', function () {
  const carService = new CarService();
  afterEach(function () {
    sinon.restore();
  });
        
  it('Cria um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(car);
  
    const result = await carService.register(newCarInput);
  
    expect(result).to.deep.equal(car);
  });

  it('Lista todos os carros cadastrados', async function () {
    sinon.stub(Model, 'find').resolves([car]);
      
    const result = await carService.getAll();
  
    expect(result).to.deep.equal(result);
  });

  it('Lista um carro de acordo com seu id', async function () {
    sinon.stub(Model, 'findById').resolves(car);
      
    const result = await carService.getById(validId);
  
    expect(result).to.deep.equal(result);
  });

  it('Lança um erro se o id for invalido', async function () {
    sinon.stub(Model, 'findById').resolves({});
      
    try {
      await carService.getById(invalidId);
    } catch (error) {
      expect((error as CustomError).message).to.be.equal('Invalid mongo id');
      expect((error as CustomError).status).to.be.equal(422);
    }
  });

  it('Lança um erro se não exitir um carro com o id requirido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
      
    try {
      await carService.getById(validId);
    } catch (error) {
      expect((error as CustomError).message).to.be.equal('Car not found');
      expect((error as CustomError).status).to.be.equal(404);
    }
  });

  it('Faz o update de um carro de acordo com seu id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);
      
    const result = await carService.updateById(validId, updateCarInput);
  
    expect(result).to.deep.equal(result);
  });
});
