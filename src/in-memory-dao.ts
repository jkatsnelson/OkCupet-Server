/// <reference path="./dao.ts" />

export class InMemoryPetDAO implements DAO.DAO<Model.Pet> {
    private id: number;
    private pets: { [id: number]: Model.Pet; };

    constructor() {
        this.id = 1;
        this.pets = {
            0: { id: 0, name: 'Maximus Meridius Decimus III', age: 2 }
        };
    }

    create(pet: Model.Pet) {
        pet.id = this.id;
        this.id++;
        this.pets[pet.id] = pet;
        return pet;
    }

    read(id: number) {
        return this.pets[id];
    }

    update(pet: Model.Pet) {
        if (this.pets[pet.id] === null) {
            return false;
        }
        this.pets[pet.id] = pet;
        return true;
    }

    delete(id: number) {
        if (this.pets[id] === null) {
            return false;
        }
        this.pets[id] = null;
        return true;
    }
}
