import DemandeRappelDao from "../data/DemandeRappelDao";
import Demande from "../model/Demande";

export default class DemandeRappelRepository {
    constructor(readonly dependencies: { demandeRappelDao: DemandeRappelDao }) {
    }

    save(demande: Demande) {
        this.dependencies.demandeRappelDao.save(demande);
    }
}