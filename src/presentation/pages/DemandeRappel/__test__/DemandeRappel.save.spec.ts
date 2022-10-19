import DemandeRappelControllerImpl from "../DemandeRappelControllerImpl";
import DemandeRappelService from "../../../../domain/DemandeRappel/service/DemandeRappelService";
import DemandeRappelRepository from "../../../../domain/DemandeRappel/repository/DemandeRappelRepository";
import DemandeRappelController from "../DemandeRappelController";
import DemandeRappelModelViewBuilder from "../modelView/DemandeRappelModelViewBuilder";
import {DemandeRappelDaoStub} from "../stub/DemandeRappelDaoStub";

describe("Demande Rappel - Save", function () {
    it("doit enregistrer les données lors de l'envoie du formulaire", function () {
        const demandeRappelDao = new DemandeRappelDaoStub();
        const demandeRappelRepository = new DemandeRappelRepository({demandeRappelDao});
        const controller: DemandeRappelController = new DemandeRappelControllerImpl({
            demandeRappelModelViewBuilder: new DemandeRappelModelViewBuilder(),
            demandeRappelService: new DemandeRappelService({demandeRappelRepository})
        });

        controller.onSubmit();

        const actual = demandeRappelDao.datas[0];

        expect(actual).toBeDefined();

    });

    it("doit enregistrer 'toto' lorsque le champ prenom est égale à toto", function () {
        const expected = "toto";

        const demandeRappelDao = new DemandeRappelDaoStub();
        const homeRepository = new DemandeRappelRepository({demandeRappelDao});
        const controller: DemandeRappelController = new DemandeRappelControllerImpl({
            demandeRappelModelViewBuilder: new DemandeRappelModelViewBuilder(),
            demandeRappelService: new DemandeRappelService({demandeRappelRepository: homeRepository})
        });

        controller.onPrenomChange(expected);
        controller.onSubmit();

        const actual = demandeRappelDao.datas[0];

        expect(actual.prenom).toEqual(expected);

    });
});