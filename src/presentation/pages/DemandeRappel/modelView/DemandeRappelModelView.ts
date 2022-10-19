import IsCloneable from "../../../../react-mvc/contracts/IsCloneable";

export default interface DemandeRappelModelView {
    readonly prenom: string;
}

export interface DemandeRappelModelViewExtended extends DemandeRappelModelView, IsCloneable<DemandeRappelModelViewExtended> {

}

