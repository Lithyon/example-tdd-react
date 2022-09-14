import DemandeRappelControllerImpl from "../DemandeRappelControllerImpl";
import DemandeRappelModelViewExtendedBuilder from "../modelView/DemandeRappelModelViewExtendedBuilder";

describe("Demande Rappel - Init", function() {
    it('should ', function () {
        const controller = new DemandeRappelControllerImpl({demandeRappelModelViewExtendedBuilder: new DemandeRappelModelViewExtendedBuilder()});
        const state = controller.state;

        expect(state).not.toBeNull();
    });
});