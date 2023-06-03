import {Injectable} from '@angular/core';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  positions: Position[] = [{
    positionId: 1,
    positionName: 'Lễ tân'
  }, {
    positionId: 2,
    positionName: 'Phục vụ'
  }, {
    positionId: 3,
    positionName: 'Chuyên viên'
  }, {
    positionId: 4,
    positionName: 'Giám sát'
  }, {
    positionId: 5,
    positionName: 'Quản lý'
  }, {
    positionId: 6,
    positionName: 'Giám đốc'
  }];

  constructor() {
  }

  public findAll() {
    return this.positions;
  }
  public findById(id: number) {
    return this.positions.find(position => position.positionId === id);
  }
}
