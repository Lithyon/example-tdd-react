import DemandeRappelRepository from "../repository/DemandeRappelRepository";
import Demande from "../model/Demande";

interface DemandeRappelServiceDependencies {
    readonly demandeRappelRepository?: DemandeRappelRepository;
}

export default class DemandeRappelService {
    constructor(readonly dependencies: DemandeRappelServiceDependencies) {

    }

    save(demande: Demande) {
        this.dependencies.demandeRappelRepository?.save(demande);
    }
}