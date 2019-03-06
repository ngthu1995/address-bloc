const MenuController = require("../controllers/MenuControllers");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  });
  describe("#getContactCount()", () => {
    it("should return 0 when no contacts are in the book", () => {
      expect(this.menu.getContactCount()).toBe(0);
    });

    it("should return 1 when there is exactly 1 contact are in the book", () => {
      this.menu.book.addContact("Bob", "555-555-5555");
      expect(this.menu.getContactCount()).toBe(1);
    });
  });
  describe("#remindMe()", () => {
    it("should return 'Learning is a life-long pursuit' if reminder works", () => {
      expect(this.menu.remindMe());
    });
  });
});
