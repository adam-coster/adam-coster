/// <reference types="cypress" />

describe('Blog Search', () => {
  beforeEach(() => {
    cy.visit('/blog/tech-debt-the-bill-comes-due');
  });

  it('can render a post', () => {
    cy.get('article').should('be.visible');
    cy.get('article .social-preview').should('be.visible');
    cy.get('article p').should('have.length.above', 5);
  });
});
