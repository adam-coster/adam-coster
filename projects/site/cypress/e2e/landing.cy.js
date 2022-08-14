/// <reference types="cypress" />

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has main portrait', () => {
    cy.get('#main .social-preview .whoami img').should('be.visible');
  });

  it('has identity listings', () => {
    cy.get('.identity-groups .identity-group').should('have.length', 3);
    cy.get('.identity-groups .identity-group li').as('id');
    cy.get('@id').should('have.length.at.least', 2);
    cy.get('@id').should('have.descendants', 'svg');
  });

  it('can visit the blogs page', () => {
    cy.get('.nav-main.header .nav-link>a[href="/blog"]')
      .should('exist')
      .click();
    cy.url().should('include', '/blog');
  });
});
