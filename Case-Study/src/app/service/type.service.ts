import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  types: CustomerType[] = [{
    typeId: 1,
    typeName: 'Member',
  }, {
    typeId: 2,
    typeName: 'Silver',
  }, {
    typeId: 3,
    typeName: 'Gold',
  }, {
    typeId: 4,
    typeName: 'Platinum',
  }, {
    typeId: 5,
    typeName: 'Diamond',
  }];

  constructor() {
  }

  public findAll() {
    return this.types;
  }
  public findById(id: number) {
    return this.types.find(type => type.typeId === id);
  }
}
