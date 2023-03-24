import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import CustomError from '../../../src/Utils/CustomError';
import { 
  motorcycle, 
  invalidId, 
  newMotorcycleInput, 
  validId, 
  updatedMotorcycle, 
  updateMotorcycleInput, 
} from '../../mocks/mocks';

describe('MotorcycleService', function () {
  const motorcycleService = new MotorcycleService();
  afterEach(function () {
    sinon.restore();
  });
        
  it('Cria uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(motorcycle);
  
    const result = await motorcycleService.register(newMotorcycleInput);
  
    expect(result).to.deep.equal(motorcycle);
  });

  it('Lista todas as motos cadastrados', async function () {
    sinon.stub(Model, 'find').resolves([motorcycle]);
      
    const result = await motorcycleService.getAll();
  
    expect(result).to.deep.equal(result);
  });

  it('Lista uma moto de acordo com seu id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycle);
      
    const result = await motorcycleService.getById(validId);
  
    expect(result).to.deep.equal(result);
  });

  it('Lança um erro se o id for invalido', async function () {
    sinon.stub(Model, 'findById').resolves({});
      
    try {
      await motorcycleService.getById(invalidId);
    } catch (error) {
      expect((error as CustomError).message).to.be.equal('Invalid mongo id');
      expect((error as CustomError).status).to.be.equal(422);
    }
  });

  it('Lança um erro se não exitir uma moto com o id requirido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
      
    try {
      await motorcycleService.getById(validId);
    } catch (error) {
      expect((error as CustomError).message).to.be.equal('Motorcycle not found');
      expect((error as CustomError).status).to.be.equal(404);
    }
  });

  it('Faz o update de uma moto de acordo com seu id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcycle);
      
    const result = await motorcycleService.updateById(validId, updateMotorcycleInput);
  
    expect(result).to.deep.equal(result);
  });
});
