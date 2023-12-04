/// <reference types="cypress" />

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit(`${Cypress.env("url")}/seleniumPractise/#/`);
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);

    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get("@productLocator")
      .find(".product")
      .eq(1)
      .find(".product-action > button")
      .click();

    cy.get("@productLocator")
      .find(".product")
      .each((el) => {
        let productName = el.find("h4.product-name").text();
        if (productName.includes("Cashews")) {
          cy.wrap(el).contains("ADD TO CART").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    cy.get("select").select("India");
    cy.get(".chkAgree").check();
    cy.contains("Proceed").click();
    cy.get('[style="color:green;font-size:25px"]').should(
      "have.text",
      "Thank you, your order has been placed successfully  You'll be redirected to Home page shortly!!"
    );
  });
});
