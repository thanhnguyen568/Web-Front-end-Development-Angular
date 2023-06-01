import {Injectable} from '@angular/core';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: Category[] = [{
    categoryCode: '01',
    categoryName: 'Bánh'
  }, {
    categoryCode: '02',
    categoryName: 'Mỳ'
  }];

  constructor() {
  }

  public getAll() {
    return this.category;
  }
}
