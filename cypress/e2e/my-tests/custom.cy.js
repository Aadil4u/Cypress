/// <reference types="cypress" />

describe("My First Test", () => {
  before(function () {
    cy.fixture("demo").then((user) => {
      this.user = user;
    });
  });

  it("Creating Custom Commands", function () {
    // Cypress.config("defaultCommandTimeout", 10000);
    cy.visit(`${Cypress.env("url")}/angularpractice/shop`);

    this.user.products.forEach((productName) => {
      cy.addProduct(productName);
    });

    let sum = 0;
    cy.get("#navbarResponsive li a").click();
    cy.get("tbody tr td:nth-child(4) strong")
      .each((el) => {
        let price = el.text().split(" ")[1];
        sum = sum + Number(price);
      })
      .then(() => {
        cy.log(sum);
      });

    cy.get("h3 > strong").then((el) => {
      let total = el.text().split(" ")[1];
      expect(sum).to.equal(Number(total));
    });
    cy.get(".btn.btn-success").click();
    cy.get("#country").type("India");
    cy.get(".suggestions li a", { timeout: 10000 }).each((el) => {
      if (el.text() === "India") {
        cy.wrap(el).click();
      }
    });
    cy.get("#checkbox2").click({ force: true });
    cy.get(".ng-untouched > .btn").click();
    cy.get(".alert").then((el) => {
      expect(el.text()).to.include(
        "Success! Thank you! Your order will be delivered in next few weeks :-)"
      );
    });
  });
});
