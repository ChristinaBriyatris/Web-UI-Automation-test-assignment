/// <reference types="Cypress" />
class webUICommons {
    
    static verifyVisibilityOfHeading(HeadingText) {
       cy.get("h1")
         .should("contains.text" , HeadingText)
         .should("be.visible");
     };
     
     static selectAddRemoveElement(){
       cy.get('a').contains('Add/Remove Elements').should("be.visible").click();
     };
   
     static addElement() {
       return cy.xpath("//button[contains(text(), 'Add Element')]").click();
     };
   
     static deleteElement() {
       return cy.xpath("//button[contains(text(), 'Delete')]").click();
     };
   
     static selectCheckboxesElement(){
       cy.get('a').contains('Checkboxes').should("be.visible").click();
     };
   
     static selectDropdownElement(){
       cy.get('a').contains('Dropdown').should("be.visible").click();
     };
   
     static selectMultipleWindowsElement(){
       cy.get('a').contains('Multiple Windows').should("be.visible").click();
     };
   
     static clickHereElement() {
       return cy.xpath("//a[contains(text(), 'Click Here')]").click();
     };
   
     static InfiniteScroll(){
       cy.get('a').contains('Infinite Scroll').should("be.visible").click();
     };
     
   };
   
   export default webUICommons;
   