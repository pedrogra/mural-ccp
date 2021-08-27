/// <reference types="cypress" />
import { getComponentID } from '../../../support/support'

Then(/^I verify if the "([^"]*)" is not empty$/, (_button) => {
	cy.get(getComponentID(_button)).invoke('attr','text').should('not.be.empty')
});

