/// <reference types="cypress" />

import webCommons from "cypress/support/webUICommons";

describe("Handle Dropdown Element", () => {

  it("verify whether the user able to select options in the dropdown", () => {
    cy.visit('https://the-internet.herokuapp.com/');
    webCommons.verifyVisibilityOfHeading("Welcome to the-internet");
    webCommons.selectDropdownElement();
    cy.get('select').select('Option 1');
    cy.wait(1000);
    cy.get('select').select('Option 2'); 
  });

});
