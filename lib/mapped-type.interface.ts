import { Type } from './Type';

export interface MappedType<T> extends Type<T> {
  new (): T;
}
