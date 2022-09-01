import ControllerBase from "@maciffr/react-mvc/core/ControllerBase";
import {HomeModelViewExtended} from "./modelView/HomeModelView";
import HomeModelViewExtendedBuilder from "./modelView/HomeModelViewExtendedBuilder";

interface HomeControllerDependencies {
    readonly homeModelViewExtendedBuilder:HomeModelViewExtendedBuilder;
}

export default class HomeController extends ControllerBase<HomeModelViewExtended> {
    private _state:HomeModelViewExtended;

    constructor(private readonly dependencies:HomeControllerDependencies) {
        super();

        this._state = this.dependencies.homeModelViewExtendedBuilder.homeModelView({}).build();
    }

    get state(): HomeModelViewExtended {
        return this._state.clone();
    }
}