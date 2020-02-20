/// <reference types="cypress" />
/* eslint-disable no-undef */

it('Finds foreldraorlof page', () => {
  cy.visit('/')
  cy.get('[href="/thjonustur/fjolskyldan"]').should('be.visible').click()
  cy.get('.page-nav__route-item:contains("Barneignir")').should('be.visible').click()
  cy.get('.page-nav__sub-route-item:contains("Fæðingar- og foreldraorlof")').should('be.visible').click()
  cy.get('.text--h2').contains('Fæðingar- og foreldraorlof')
})

it('Finds foreldraorlof page from "Sjá allt"', () => {
  cy.visit('/')
  cy.get('.title-wrapper__link:contains("Sjá allt")').should('be.visible').click()
  cy.get('.page-nav__route-item:contains("Fjölskyldan")').should('be.visible').click()
  cy.get('.page-nav__route-item:contains("Barneignir")').should('be.visible').click()
  cy.get('.page-nav__sub-route-item:contains("Fæðingar- og foreldraorlof")').should('be.visible').click()
  cy.get('.text--h2').contains('Fæðingar- og foreldraorlof')
})
