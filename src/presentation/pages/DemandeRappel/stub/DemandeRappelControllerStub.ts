import ControllerBase from "@maciffr/react-mvc/core/ControllerBase";
import DemandeRappelController from "../DemandeRappelController";
import DemandeRappelModelViewExtendedBuilder from "../modelView/DemandeRappelModelViewExtendedBuilder";
import { DemandeRappelViewExtended } from "../modelView/DemandeRappelModelView";

type action = () => void;

export default class DemandeRappelControllerStub extends ControllerBase<DemandeRappelViewExtended> implements DemandeRappelController {
  private _state: DemandeRappelViewExtended;

  constructor(onSubmit: action, onChange: action) {
    super();
    this._state = (new DemandeRappelModelViewExtendedBuilder).demandeRappelModelView({ prenom: "" }).build();
    this.onSubmit = onSubmit;
    this.onPrenomChange = onChange;
  }

  get state(): DemandeRappelViewExtended {
    return this._state.clone();
  }

  onPrenomChange(prenom: string) {
  }

  onSubmit() {
  }
}