import {
  model,
  Model,
  Schema,
  models,
  UpdateQuery,
} from 'mongoose';
  
export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;
    
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model<T>(this.modelName, this.schema);
  }
  
  async register(toCreate: T): Promise<T> {
    const newRegister = await this.model.create(toCreate);
    return newRegister;
  }
  
  async getAll(): Promise<T[]> {
    const document = await this.model.find({});
    return document;
  }
  
  async getById(id: string): Promise<T | null> {
    const document = await this.model.findById(id);
      
    return document;
  }
  
  async updateById(id: string, update: T): Promise<T | null> {
    const document = await this.model.findByIdAndUpdate(
      id, 
      update as UpdateQuery<T>,
      { new: true },
    );
      
    return document;
  }
}