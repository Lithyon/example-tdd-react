import HomeRepository, {User} from "./HomeRepository";

interface HomeServiceDependencies {
    readonly homeRepository?: HomeRepository;
}

export default class HomeService {
    constructor(readonly dependencies:HomeServiceDependencies) {

    }

    save(user:User) {
        this.dependencies.homeRepository?.save(user);
    }
}