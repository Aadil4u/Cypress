// let registrationPage = require("../../pages/registrationPage.js");
import registrationPage from "../../pages/registrationPage";

describe("Fixture Demo With POM", () => {
  beforeEach(function () {
    cy.visit(Cypress.env("url") + "/angularpractice/");
    cy.fixture("demo").then((user) => {
      this.user = user;
    });
  });

  it("First Test", function () {
    registrationPage.elements.nameInput().type(this.user.name);
    registrationPage.elements.genderDropdown().select(this.user.gender);
  });

  it("Verifying Attributes", function () {
    registrationPage.elements.nameInput().type(this.user.name);
    registrationPage.elements.genderDropdown().select(this.user.gender);
    registrationPage.elements
      .dataBindingInput()
      .should("have.value", this.user.name);
    registrationPage.elements.nameInput().should("have.attr", "minlength", 2);
    registrationPage.elements.disabledRadioBtn().should("be.disabled");
  });
});
