import DemandeRappelDao from "../../../../domain/DemandeRappel/data/DemandeRappelDao";
import Demande from "../../../../domain/DemandeRappel/model/Demande";

export class DemandeRappelDaoStub implements DemandeRappelDao {
  public readonly datas: Array<Demande>;

  constructor() {
    this.datas = [];
  }

  save(demande: Demande) {
    this.datas.push(demande);
  }
}