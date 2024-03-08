/// <reference types="cypress" />

import webCommons from "cypress/support/webUICommons";

describe("Handle Add/Remove Element", () => {

  it("verify whether the user able to Add and Remove element", () => {
    cy.visit('https://the-internet.herokuapp.com/');
    webCommons.verifyVisibilityOfHeading("Welcome to the-internet");
    webCommons.selectAddRemoveElement();
    webCommons.addElement();
    cy.wait(1000);
    webCommons.deleteElement();
  });
  
});
