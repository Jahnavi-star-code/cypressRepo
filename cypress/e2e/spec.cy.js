import userfun from "../pageObjects/apiTesting/userfun";
describe("template spec", () => {
  it("passes", () => {
    userfun.addPet();
  });
  it("getUser", () => {
    userfun.getUser();
  });
});
