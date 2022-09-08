export interface User {
    readonly surnom:string;
}

export interface Dao {
    save(user:User):void;
}

export default class HomeRepository {
    constructor(readonly dependencies: { dao: Dao }) {
        
    }

    save(user:User) {
        this.dependencies.dao.save(user);
    }

}