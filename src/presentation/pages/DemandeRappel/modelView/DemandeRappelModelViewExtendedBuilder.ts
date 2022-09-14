import CloneableExtension from "@maciffr/react-mvc/core/CloneableExtension";
import DemandeRappelModelView, { DemandeRappelViewExtended } from "./DemandeRappelModelView";
import { prototype } from "./DemandeRappelViewModelPrototype";

export default class DemandeRappelModelViewExtendedBuilder {
  private readonly state?: DemandeRappelModelView;

  constructor(state?: DemandeRappelModelView) {
    this.state = state;
  }

  demandeRappelModelView(demandeRappelModelView: DemandeRappelModelView): DemandeRappelModelViewExtendedBuilder {
    return new DemandeRappelModelViewExtendedBuilder(demandeRappelModelView);
  }

  build(): DemandeRappelViewExtended {
    return CloneableExtension(this.state, prototype);
  }

  prenom(prenom: string) {
    return new DemandeRappelModelViewExtendedBuilder({ ...this.state, prenom });
  }
}