import HomeControllerImpl from "../HomeControllerImpl";
import HomeService from "../../../../domain/Home/HomeService";
import HomeRepository, { User } from "../../../../domain/Home/HomeRepository";
import HomeController from "../HomeController";
import HomeModelViewExtendedBuilder from "../modelView/HomeModelViewExtendedBuilder";

class Dao {
    public readonly datas:Array<User>;

    constructor() {
        this.datas = [];
    }

    save(user:User) {
        this.datas.push(user);
    }
}

describe('Home - Save', function () {
    it('should save when ok', function () {
        const dao = new Dao();
        const homeRepository = new HomeRepository({ dao });
        const controller:HomeController = new HomeControllerImpl({
            homeModelViewExtendedBuilder: new HomeModelViewExtendedBuilder(),
            homeService: new HomeService({ homeRepository })
        });


        controller.onSubmit();

        const actual = dao.datas[0];

        expect(actual).toBeDefined();

    });

    it('should surname equal toto when name equal toto', function () {
        const dao = new Dao();
        const expected = "toto";
        const homeRepository = new HomeRepository({ dao });
        const controller:HomeController = new HomeControllerImpl({
            homeModelViewExtendedBuilder: new HomeModelViewExtendedBuilder(),
            homeService: new HomeService({ homeRepository })
        });


        controller.onNameChange(expected);
        controller.onSubmit();

        const actual = dao.datas[0];

        expect(actual.surnom).toEqual(expected);

    });
});