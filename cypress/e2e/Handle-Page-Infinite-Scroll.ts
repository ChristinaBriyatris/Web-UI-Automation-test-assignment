/// <reference types="cypress" />

import webCommons from "cypress/support/webUICommons";

describe("Handle page Infinite Scroll", () => {

  it("verify whether the user able to Scroll the page infinite", () => {
    cy.visit('https://the-internet.herokuapp.com/');
    webCommons.verifyVisibilityOfHeading("Welcome to the-internet");
    webCommons.InfiniteScroll();
    cy.scrollTo('bottom', {duration: 50000});
    
  });
});
