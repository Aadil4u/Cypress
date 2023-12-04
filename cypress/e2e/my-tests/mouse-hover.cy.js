/// <reference types="cypress" />

describe("Handle Mouse Hover", () => {
  it("Handle Mouse Hover - First Way", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get("a[href='#top']").click({ force: true });
    cy.url().should("include", "/#top");
  });

  it("Handle Mouse Hover - Second Way - User Parent", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get(".mouse-hover-content").scrollIntoView();
    cy.get(".mouse-hover-content").invoke("show");
    cy.get("a[href='#top']").click();
    cy.url().should("include", "/#top");
  });
});
