/// <reference types="cypress" />

describe("My Web Table", () => {
  it("Handle web table - first way", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(
      (el, index, list) => {
        let courseName = el.text();
        if (courseName.includes("Jenkins,C")) {
          let price = el.next().text();
          cy.log(price);
        }
      }
    );
  });

  it("Handle web table - second way", () => {
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(
      (el, index, list) => {
        let courseName = el.text();
        if (courseName.includes("Jenkins,C")) {
          cy.get("table[name='courses'] tbody tr td:nth-child(2)")
            .eq(index)
            .next()
            .then((el) => {
              expect(el.text()).to.equal("20");
            });
        }
      }
    );
  });
});
