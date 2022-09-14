import DemandeRappelControllerImpl from "../DemandeRappelControllerImpl";
import DemandeRappelService from "../../../../domain/DemandeRappel/service/DemandeRappelService";
import DemandeRappelRepository from "../../../../domain/DemandeRappel/repository/DemandeRappelRepository";
import DemandeRappelController from "../DemandeRappelController";
import DemandeRappelModelViewExtendedBuilder from "../modelView/DemandeRappelModelViewExtendedBuilder";
import { DemandeRappelDaoStub } from "../stub/DemandeRappelDaoStub";

describe("Demande Rappel - Save", function() {
  it("should save when ok", function() {
    const demandeRappelDao = new DemandeRappelDaoStub();
    const demandeRappelRepository = new DemandeRappelRepository({ demandeRappelDao });
    const controller: DemandeRappelController = new DemandeRappelControllerImpl({
      demandeRappelModelViewExtendedBuilder: new DemandeRappelModelViewExtendedBuilder(),
      demandeRappelService: new DemandeRappelService({ demandeRappelRepository })
    });


    controller.onSubmit();

    const actual = demandeRappelDao.datas[0];

    expect(actual).toBeDefined();

  });

  it("should surname equal toto when name equal toto", function() {
    const demandeRappelDao = new DemandeRappelDaoStub();
    const expected = "toto";
    const homeRepository = new DemandeRappelRepository({ demandeRappelDao });
    const controller: DemandeRappelController = new DemandeRappelControllerImpl({
      demandeRappelModelViewExtendedBuilder: new DemandeRappelModelViewExtendedBuilder(),
      demandeRappelService: new DemandeRappelService({ demandeRappelRepository: homeRepository })
    });


    controller.onPrenomChange(expected);
    controller.onSubmit();

    const actual = demandeRappelDao.datas[0];

    expect(actual.prenom).toEqual(expected);

  });
});