import HomeController from "../HomeController";
import HomeModelViewExtendedBuilder from "../modelView/HomeModelViewExtendedBuilder";

describe("Home Init", function() {
    it('should ', function () {
        const controller = new HomeController({homeModelViewExtendedBuilder: new HomeModelViewExtendedBuilder()});
        const state = controller.state;

        expect(state).not.toBeNull();
    });
});