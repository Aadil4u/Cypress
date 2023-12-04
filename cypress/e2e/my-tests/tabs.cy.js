/// <reference types="cypress" />

describe("My First Test", () => {
  it("Handle New Tab", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get(".navigation ul li a[href='/']").click();
      cy.get("#about-part div h2").should(
        "have.text",
        "Welcome to QAClick Academy "
      );
    });
  });

  it.only("Handle New Tab - Other Way", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get("#opentab").then((el) => {
      let url = el.prop("href");
      cy.visit(url);
      cy.origin("https://www.qaclickacademy.com/", () => {
        cy.get(".navigation ul li a[href='/']").click();
        cy.get("#about-part div h2").should(
          "have.text",
          "Welcome to QAClick Academy "
        );
      });
    });
  });
});
