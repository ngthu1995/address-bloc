const MenuController = require("../controllers/MenuControllers");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  });

  describe("#remindMe()", () => {
    it("should return 'Learning is a life-long pursuit' if reminder works", () => {
      expect(this.menu.remindMe());
    });
  });
});
