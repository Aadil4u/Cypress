/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("My Frames", () => {
  it("Handle Frames", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("li a[href*='mentorship']").eq(0).click();
    cy.wait(2000);
    cy.iframe().find("div h1.pricing-title").should("have.length", 2);
  });
});
