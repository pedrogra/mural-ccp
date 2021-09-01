/// <reference types="cypress" />
import { getComponentURL, getComponentID } from '../../support/support'

Given(/^I verify Storybook is available$/, () => {
	cy.visit('http://localhost:6006')
	cy.get('a[title="Storybook"]').should('be.visible')
});

Then(/^I verify if the "([^"]*)" is visible$/, (_component) => {
	cy.visit(getComponentURL(_component))
	cy.get(getComponentID(_component)).should('be.visible')
});


When(/^I navigate to "([^"]*)" then "([^"]*)"$/, (area,component) => {
	cy.get('#components-'+area)
		.invoke('attr', 'aria-expanded')
		.then(expanded => {
			cy.log(expanded)
			if(expanded === false){
				cy.get('#components-'+area).click()
			}
		})
	cy.get('#components-'+area+'--'+component).click()
});



