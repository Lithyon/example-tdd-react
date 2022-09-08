import HomeControllerImpl from "../HomeControllerImpl";
import HomeModelViewExtendedBuilder from "../modelView/HomeModelViewExtendedBuilder";

describe("Home Init", function() {
    it('should ', function () {
        const controller = new HomeControllerImpl({homeModelViewExtendedBuilder: new HomeModelViewExtendedBuilder()});
        const state = controller.state;

        expect(state).not.toBeNull();
    });
});