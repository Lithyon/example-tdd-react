import Demande from "../model/Demande";
import DemandeRappelDao from "./DemandeRappelDao";

export default class DemandeRappelDaoImpl implements DemandeRappelDao {
    save(demande: Demande): void {
        console.log(demande);
    }
}