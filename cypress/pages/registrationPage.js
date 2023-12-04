class registrationPage {
  elements = {
    nameInput: () => cy.get(".form-group input[name*='name']"),
    genderDropdown: () => cy.get("#exampleFormControlSelect1"),
    dataBindingInput: () => cy.get("h4 input[name='name']"),
    disabledRadioBtn: () => cy.get("#inlineRadio3"),
  };
}

module.exports = new registrationPage();
