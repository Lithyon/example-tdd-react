import DemandeRappelControllerImpl from "../DemandeRappelControllerImpl";
import DemandeRappelModelViewBuilder from "../modelView/DemandeRappelModelViewBuilder";

describe("Demande Rappel - Init", function () {
    it("doit s'initialiser correctement", function () {
        const controller = new DemandeRappelControllerImpl({demandeRappelModelViewBuilder: new DemandeRappelModelViewBuilder()});

        const state = controller.state;

        expect(state).not.toBeNull();
    });
});