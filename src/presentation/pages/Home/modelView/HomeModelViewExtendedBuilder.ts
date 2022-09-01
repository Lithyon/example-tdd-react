import CloneableExtension from "@maciffr/react-mvc/core/CloneableExtension";
import HomeModelView, {HomeModelViewExtended} from "./HomeModelView";
import {prototype} from "./HomeViewModelPrototype";

export default class HomeModelViewExtendedBuilder {
    private readonly state?: HomeModelView;

    constructor(state?: HomeModelView) {
        this.state = state;
    }

    homeModelView(homeModelView: HomeModelView): HomeModelViewExtendedBuilder {
        return new HomeModelViewExtendedBuilder(homeModelView);
    }

    build(): HomeModelViewExtended {
        return CloneableExtension(this.state, prototype);
    }
}