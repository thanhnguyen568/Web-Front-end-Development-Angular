import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [{
    word: 'dog',
    mean: 'cho'
  },
    {
      word: 'cat',
      mean: 'meo'
    }];

  constructor() {
  }
  public getAll() {
    return this.dictionaries;
  }

  public findById(id: string) {
    return this.dictionaries.find(dic => dic.word === id);
  }
}
