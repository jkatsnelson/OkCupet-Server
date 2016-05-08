/// <reference path="./model.ts" />
// data access object
module DAO {
  export interface DAO<T extends Model.Identifiable> {
    create(t: T): T;
    read(id: number): T;
    update(t: T): boolean;
    delete(id: number): boolean;
    readAll(): { [id: number]: Model.Pet; };
  }
}
