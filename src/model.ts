module Model {
  export interface Identifiable {
    id?: number;
  }

  export interface Pet extends Identifiable {
    name: string;
    age: number;
  }
}
