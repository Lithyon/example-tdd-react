import CloneableExtension from "../../../../react-mvc/core/CloneableExtension";
import DemandeRappelModelView, {DemandeRappelModelViewExtended} from "./DemandeRappelModelView";
import {prototype} from "./DemandeRappelViewModelPrototype";

export default class DemandeRappelModelViewBuilder {
    private readonly state?: DemandeRappelModelView;

    constructor(state?: DemandeRappelModelView) {
        this.state = state;
    }

    demandeRappelModelView(demandeRappelModelView: DemandeRappelModelView): DemandeRappelModelViewBuilder {
        return new DemandeRappelModelViewBuilder(demandeRappelModelView);
    }

    build(): DemandeRappelModelViewExtended {
        return CloneableExtension(this.state, prototype);
    }

    prenom(prenom: string) {
        return new DemandeRappelModelViewBuilder({...this.state, prenom})
    }
}