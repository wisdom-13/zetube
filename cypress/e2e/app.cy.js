/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('Youtube App', () => {
  beforeEach(() => {
    cy.intercept('GET', /(mostPopular)/g, {
      fixture: 'popular.json'
    })
    cy.intercept('GET', /(search)/g, {
      fixture: 'search.json'
    })

    cy.viewport(1200, 800);
    cy.visit('/')
  });

  it('renders', () => {
    cy.findByText('zetube').should('exist');
  })

  it('shows popluar video first', () => {
    cy.findByText('Popular video').should('exist')
  })

  it('searches by keyword', () => {
    cy.findByPlaceholderText('Search').type('샤이니');
    cy.findByRole('button').click();
    cy.findByText('Search Result').should('exist');
  })

  it('goes to detail page', () => {
    cy.findAllByRole('listitem').first().click();
    cy.findByTitle('Popular video').should('exist');
    cy.findByText('Popular video').should('exist');
    cy.findByText('Search Result').should('exist');

  })
})