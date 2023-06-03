import {CustomerType} from './customer-type';

export interface Customer {
  customerId?: number;
  customerName?: string;
  customerDateOfBirth?: string;
  customerIdCard?: string;
  customerPhone?: number;
  customerEmail?: string;
  customerAddress?: string;
  customerType?: CustomerType;
}
