class shopPage {
  elements = {
    productNames: () => cy.get(".card-title a"),
    addToCartBtn: () => cy.get(".btn-info"),
  };
}

module.exports = new shopPage();
