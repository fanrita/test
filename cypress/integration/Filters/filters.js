import { When, And } from 'cypress-cucumber-preprocessor/steps';

const NAME_FILED_LOCATOR = '[data-e2e="name-filed"]';
const CITY_FILED_LOCATOR = '[data-e2e="city-filed"]';
const SUBMIT_BUTTON_LOCATOR = '[data-e2e="submit-button"]';
const CLEAR_BUTTON_LOCATOR = '[data-e2e="clear-button"]';

When('I type {string} into  Name filed', (name) => {
  cy.get(NAME_FILED_LOCATOR).type(name);
});

And('I type {string} into  City filed', (city) => {
  cy.get(CITY_FILED_LOCATOR).type(city);
});

And('I apply filter', () => {
  cy.get(SUBMIT_BUTTON_LOCATOR).click();
});

And('I clear filter', () => {
  cy.get(CLEAR_BUTTON_LOCATOR).click();
});
