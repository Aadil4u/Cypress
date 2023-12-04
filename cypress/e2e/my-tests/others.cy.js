/// <reference types="cypress" />

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
  });

  it("Handle Checkbox", () => {
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get("input[type='checkbox']").check(["option2", "option3"]);
  });

  it("Handle Dynamic Dropdown", () => {
    cy.get("#autocomplete").type("In");
    cy.get("li div.ui-menu-item-wrapper").each((el) => {
      if (el.text() === "India") {
        cy.wrap(el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });

  it("Handle Select Dropdown", () => {
    cy.get("#dropdown-class-example")
      .select("option1")
      .should("have.value", "option1");
    cy.get("#dropdown-class-example")
      .select("Option2")
      .should("have.value", "option2");
    cy.get("#dropdown-class-example").select(3).should("have.value", "option3");
  });

  it("Handle Alerts", () => {
    cy.get("#alertbtn").click();
    cy.on("window:alert", (t) => {
      expect(t).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("#confirmbtn").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("Hello , Are you sure you want to confirm?");
      return false;
    });
  });

  it.only("Handle Invisible and Visible Elements", () => {
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });
});
