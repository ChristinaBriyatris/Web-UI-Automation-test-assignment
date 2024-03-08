/// <reference types="cypress" />

import webCommons from "cypress/support/webUICommons";

describe("Handle CheckBox element", () => {

    it("verify whether the user able to check and uncheck checkboxes", () => {
    cy.visit('https://the-internet.herokuapp.com/');
    webCommons.verifyVisibilityOfHeading("Welcome to the-internet");
    webCommons.selectCheckboxesElement();
    cy.xpath("//input[@type='checkbox']").eq(0).check();
    cy.wait(1000);
    cy.xpath("//input[@type='checkbox']").eq(1).uncheck();
  });

});
