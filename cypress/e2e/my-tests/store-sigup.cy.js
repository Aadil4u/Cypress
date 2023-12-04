/// <reference types="cypress" />
import { fa, faker } from "@faker-js/faker";

describe("Signup Test", () => {
  let password = faker.internet.password();
  it("Register a User", () => {
    cy.visit("https://naveenautomationlabs.com/opencart");
    cy.get("[title='My Account']").click();
    cy.contains("Register").click();
    cy.get("#input-firstname").type(faker.person.firstName());
    cy.get("#input-lastname").type(faker.person.lastName());
    cy.get("#input-email").type(faker.internet.email());
    cy.get("#input-telephone").type(faker.phone.number("9#########"));
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
    cy.get("label input[name='newsletter']").eq(0).check();
    cy.get("label input[name='newsletter']").eq(1).check();
    cy.get('[type="checkbox"]').check();
    cy.get("input[value='Continue']").click();
    cy.get("h1").should("have.text", "Your Account Has Been Created!");
  });
});
