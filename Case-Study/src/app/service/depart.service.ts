import {Injectable} from '@angular/core';
import {Depart} from '../model/depart';

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  departs: Depart[] = [{
    departId: 1,
    departName: 'Sale – Marketing'
  }, {
    departId: 2,
    departName: 'Hành chính'
  }, {
    departId: 3,
    departName: 'Phục vụ'
  }, {
    departId: 4,
    departName: 'Quản lý'
  }];

  constructor() {
  }

  public findAll() {
    return this.departs;
  }
  public findById(id: number) {
    return this.departs.find(depart => depart.departId === id);
  }
}
