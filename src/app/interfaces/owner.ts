import { Pet } from './pet';

export interface Owner {
  name: string;
  address: string;
  city: string;
  telephone: string;
  pets: Pet[];
}
