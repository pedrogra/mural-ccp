/// <reference types="cypress" />
import { getComponentURL, getComponentID } from '../../support/support'

Then(/^I verify if the "([^"]*)" is visible$/, (_component) => {
	cy.visit(getComponentURL(_component))
	cy.get(getComponentID(_component)).should('be.visible')
});

