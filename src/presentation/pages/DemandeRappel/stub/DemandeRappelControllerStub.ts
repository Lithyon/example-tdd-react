import ControllerBase from "../../../../react-mvc/core/ControllerBase";
import DemandeRappelController from "../DemandeRappelController";
import DemandeRappelModelViewBuilder from "../modelView/DemandeRappelModelViewBuilder";
import {DemandeRappelModelViewExtended} from "../modelView/DemandeRappelModelView";

type action = () => void;

export default class DemandeRappelControllerStub extends ControllerBase<DemandeRappelModelViewExtended> implements DemandeRappelController {
    private _state: DemandeRappelModelViewExtended;

    constructor(onSubmit: action, onChange: action) {
        super();
        this._state = (new DemandeRappelModelViewBuilder).demandeRappelModelView({prenom: ""}).build();
        this.onSubmit = onSubmit;
        this.onPrenomChange = onChange;
    }

    get state(): DemandeRappelModelViewExtended {
        return this._state.clone();
    }

    onPrenomChange(prenom: string) {
    }

    onSubmit() {
    }
}