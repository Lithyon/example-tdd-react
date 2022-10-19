import ControllerBase from "../../../../react-mvc/core/ControllerBase";
import {HomeModelViewExtended} from "../modelView/HomeModelView";
import HomeController from "../HomeController";
import HomeModelViewExtendedBuilder from "../modelView/HomeModelViewExtendedBuilder";

type action = () => void;

export default class MonController extends ControllerBase<HomeModelViewExtended> implements HomeController {
    private _state: HomeModelViewExtended;

    constructor(onSubmit: action, onChange: action) {
        super();
        this._state = (new HomeModelViewExtendedBuilder).homeModelView({name: ""}).build();
        this.onSubmit = onSubmit;
        this.onNameChange = onChange;
    }

    get state(): HomeModelViewExtended {
        return this._state.clone();
    }

    onNameChange(name: string): void {
    }


    onSubmit(): void {
    }
}