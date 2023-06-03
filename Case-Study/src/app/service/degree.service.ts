import {Injectable} from '@angular/core';
import {Degree} from '../model/degree';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  degrees: Degree[] = [{
    degreeId: 1,
    degreeName: 'Sau đại học'
  }, {
    degreeId: 2,
    degreeName: 'Đại học'
  }, {
    degreeId: 3,
    degreeName: 'Cao đẳng'
  }, {
    degreeId: 4,
    degreeName: 'Trung cấp'
  }];

  constructor() {
  }

  public findAll() {
    return this.degrees;
  }
  public findById(id: number) {
    return this.degrees.find(degree => degree.degreeId === id);
  }
}
