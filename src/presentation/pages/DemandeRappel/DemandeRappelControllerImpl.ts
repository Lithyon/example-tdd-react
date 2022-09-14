import ControllerBase from "@maciffr/react-mvc/core/ControllerBase";
import DemandeRappelModelViewExtendedBuilder from "./modelView/DemandeRappelModelViewExtendedBuilder";
import DemandeRappelService from "../../../domain/DemandeRappel/service/DemandeRappelService";
import DemandeRappelController from "./DemandeRappelController";
import { DemandeRappelViewExtended } from "./modelView/DemandeRappelModelView";

interface DemandeRappelControllerDependencies {
  readonly demandeRappelModelViewExtendedBuilder: DemandeRappelModelViewExtendedBuilder;
  readonly demandeRappelService?: DemandeRappelService;
}

export default class DemandeRappelControllerImpl extends ControllerBase<DemandeRappelViewExtended> implements DemandeRappelController {
  private _state: DemandeRappelViewExtended;

  constructor(private readonly dependencies: DemandeRappelControllerDependencies) {
    super();

    this._state = this.dependencies.demandeRappelModelViewExtendedBuilder.demandeRappelModelView({ prenom: "" }).build();
  }

  onSubmit(): void {
    this.dependencies.demandeRappelService?.save({
      prenom: this._state.prenom
    });
  }

  get state(): DemandeRappelViewExtended {
    return this._state.clone();
  }

  onPrenomChange(prenom: string): void {
    this._state = this.dependencies.demandeRappelModelViewExtendedBuilder.demandeRappelModelView(this._state).prenom(prenom).build();
  }
}