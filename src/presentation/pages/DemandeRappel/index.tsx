import DemandeRappelView from "./DemandeRappelView";
import DemandeRappelControllerImpl from "./DemandeRappelControllerImpl";
import DemandeRappelModelViewBuilder from "./modelView/DemandeRappelModelViewBuilder";
import demandeRappelService from "../../../domain/DemandeRappel/service";

export default function DemandeRappel() {
    const controller = new DemandeRappelControllerImpl({
        demandeRappelService,
        demandeRappelModelViewBuilder: new DemandeRappelModelViewBuilder()
    });

    return <DemandeRappelView controller={controller}/>;
};