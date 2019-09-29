import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('Application page was opened', () => {
  cy.clearLocalStorage();
  cy.visit('/');
});
