describe("Fixture Demo", () => {
  beforeEach(function () {
    cy.visit(Cypress.env("url") + "/angularpractice/");
    cy.fixture("demo").then((user) => {
      this.user = user;
    });
  });

  it("First Test", function () {
    cy.get(".form-group input[name*='name']").type(this.user.name);
    cy.get("#exampleFormControlSelect1").select(this.user.gender);
  });

  it("Verifying Attributes", function () {
    cy.get(".form-group input[name*='name']").type(this.user.name);
    cy.get("#exampleFormControlSelect1").select(this.user.gender);
    cy.get("h4 input[name='name']").should("have.value", this.user.name);
    cy.get(".form-group input[name*='name']").should(
      "have.attr",
      "minlength",
      2
    );
    cy.get("#inlineRadio3").should("be.disabled");
  });
});
