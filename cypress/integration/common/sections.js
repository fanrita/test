import { When, Then } from "cypress-cucumber-preprocessor/steps";

const APPLIED_SECTION_LOCATOR = '[data-e2e="applied-section"]';
const INTERVIEWING_SECTION_LOCATOR = '[data-e2e="interviewing-section"]';
const HIRED_SECTION_LOCATOR = '[data-e2e="hired-section"]';
const APPLIED_TITLE_LOCATOR = '[data-e2e="applied-title"]';
const INTERVIEWING_TITLE_LOCATOR = '[data-e2e="interviewing-title"]';
const HIRED_TITLE_LOCATOR = '[data-e2e="hired-title"]';
const MOVE_UP_BTN_LOCATOR = '[data-e2e="move_up_btn"]';
const MOVE_DOWN_BTN_LOCATOR = '[data-e2e="move_down_btn"]';
const CREW_MEMBER_CONTAINER_LOCATOR = '[data-e2e="crew-member-container"]';
const CREW_MEMBER_NAME_LOCATOR = '[data-e2e="crew-member-name"]';
const CREW_MEMBER_CITY_LOCATOR = '[data-e2e="crew-member-city"]';
const CREW_MEMBER_IMG_LOCATOR = '[data-e2e="crew-member-image"]';

Then("I see title {string} in the Applied section", title => {
  cy.get(APPLIED_TITLE_LOCATOR).should("contain", title);
});

Then("I see title {string} in the Interviewing section", title => {
  cy.get(INTERVIEWING_TITLE_LOCATOR).should("contain", title);
});

Then("I see title {string} in the Hired section", title => {
  cy.get(HIRED_TITLE_LOCATOR).should("contain", title);
});

Then("I see {string} in the Applied section", name => {
  cy.get(CREW_MEMBER_NAME_LOCATOR).should("contain", name);
});
Then("I see #{int} tile in the Applied section", count => {
  cy.get(APPLIED_SECTION_LOCATOR).within(() => {
    cy.get(CREW_MEMBER_CONTAINER_LOCATOR).should("have.length", count);
  });
});

Then("I see #{int} tile in the Interviewing section", count => {
  cy.get(INTERVIEWING_SECTION_LOCATOR).within(() => {
    cy.get(CREW_MEMBER_CONTAINER_LOCATOR).should("have.length", count);
  });
});

Then("I see #{int} tile in the Hired section", count => {
  cy.get(HIRED_SECTION_LOCATOR).within(() => {
    cy.get(CREW_MEMBER_CONTAINER_LOCATOR).should("have.length", count);
  });
});

When("I click move up button on tile {string}", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(MOVE_UP_BTN_LOCATOR).click();
    });
});

When("I click move down button on tile {string}", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(MOVE_DOWN_BTN_LOCATOR).click();
    });
});

When("I see move up button on {string} tile", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(MOVE_UP_BTN_LOCATOR).should("be.exist");
    });
});

When("I should not see move up button on {string} tile", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(MOVE_UP_BTN_LOCATOR).should("not.exist");
    });
});

When("I see move down button on {string} tile", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(MOVE_DOWN_BTN_LOCATOR).should("be.exist");
    });
});

When("I should not see move down button on {string} tile", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(MOVE_DOWN_BTN_LOCATOR).should("not.exist");
    });
});

Then("Should see name {string} on {string} tile", (name, tile) => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(CREW_MEMBER_NAME_LOCATOR).should("contain", name);
    });
});

Then("Should see city {string} on {string} tile", (city, tile) => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(CREW_MEMBER_CITY_LOCATOR).should("contain", city);
    });
});
When("Should see photo on {string} tile", tile => {
  cy.get(CREW_MEMBER_NAME_LOCATOR)
    .contains(tile)
    .parents(CREW_MEMBER_CONTAINER_LOCATOR)
    .within(() => {
      cy.get(CREW_MEMBER_IMG_LOCATOR).should("exist");
    });
});
