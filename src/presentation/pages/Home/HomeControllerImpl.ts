import ControllerBase from "../../../react-mvc/core/ControllerBase";
import {HomeModelViewExtended} from "./modelView/HomeModelView";
import HomeModelViewExtendedBuilder from "./modelView/HomeModelViewExtendedBuilder";
import HomeService from "../../../domain/Home/HomeService";
import HomeController from "./HomeController";

interface HomeControllerDependencies {
    readonly homeModelViewExtendedBuilder:HomeModelViewExtendedBuilder;
    readonly homeService?:HomeService;
}

export default class HomeControllerImpl extends ControllerBase<HomeModelViewExtended> implements HomeController{
    private _state:HomeModelViewExtended;

    constructor(private readonly dependencies:HomeControllerDependencies) {
        super();

        this._state = this.dependencies.homeModelViewExtendedBuilder.homeModelView({name:""}).build();
    }

    onSubmit(): void {
        this.dependencies.homeService?.save({
            surnom: this._state.name
        });
    }

    get state(): HomeModelViewExtended {
        return this._state.clone();
    }

    onNameChange(name: string): void {
        this._state = this.dependencies.homeModelViewExtendedBuilder.homeModelView(this._state).name(name).build();
    }
}