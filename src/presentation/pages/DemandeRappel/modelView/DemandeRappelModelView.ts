import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";

export default interface DemandeRappelModelView {
    readonly prenom:string;
}

export interface DemandeRappelViewExtended extends DemandeRappelModelView, IsCloneable<DemandeRappelViewExtended> {

}
