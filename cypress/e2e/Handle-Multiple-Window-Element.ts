/// <reference types="cypress" />

import webCommons from "cypress/support/webUICommons";

describe("Handle Multiple Window Element", () => {

  it("verify whether the user able to Opening a new window", () => {
    cy.visit('https://the-internet.herokuapp.com/');
    webCommons.verifyVisibilityOfHeading("Welcome to the-internet");
    webCommons.selectMultipleWindowsElement();
    webCommons.clickHereElement();
  
  });
  
});
