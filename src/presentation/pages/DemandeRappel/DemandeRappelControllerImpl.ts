import ControllerBase from "../../../react-mvc/core/ControllerBase";
import {DemandeRappelModelViewExtended} from "./modelView/DemandeRappelModelView";
import DemandeRappelModelViewBuilder from "./modelView/DemandeRappelModelViewBuilder";
import DemandeRappelController from "./DemandeRappelController";
import DemandeRappelService from "../../../domain/DemandeRappel/service/DemandeRappelService";

interface DemandeRappelControllerDependencies {
    readonly demandeRappelModelViewBuilder: DemandeRappelModelViewBuilder;
    readonly demandeRappelService?: DemandeRappelService;
}

export default class DemandeRappelControllerImpl extends ControllerBase<DemandeRappelModelViewExtended> implements DemandeRappelController {
    private _state: DemandeRappelModelViewExtended;

    constructor(private readonly dependencies: DemandeRappelControllerDependencies) {
        super();

        this._state = this.dependencies.demandeRappelModelViewBuilder.demandeRappelModelView({prenom: ""}).build();
    }

    onSubmit(): void {
        this.dependencies.demandeRappelService?.save({
            prenom: this._state.prenom
        });
    }

    get state(): DemandeRappelModelViewExtended {
        return this._state.clone();
    }

    onPrenomChange(prenom: string): void {
        this._state = this.dependencies.demandeRappelModelViewBuilder.demandeRappelModelView(this._state).prenom(prenom).build();
    }
}