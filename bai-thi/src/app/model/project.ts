import {Person} from './person';

export interface Project {
  id?: number;
  projectCode?: string;
  projectDateIn?: string;
  projectDateOut?: string;
  projectReason?: string;
  projectMethod?: string;
  projectBS?: string;
  person?: Person;
}
