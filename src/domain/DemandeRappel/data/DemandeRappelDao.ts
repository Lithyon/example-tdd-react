import Demande from "../model/Demande";

export default interface DemandeRappelDao {
    save(demande: Demande): void
}