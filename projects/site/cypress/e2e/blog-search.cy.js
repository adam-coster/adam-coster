/// <reference types="cypress" />

describe('Blog Search', () => {
	beforeEach(() => {
		cy.visit('/blog');
	});

	it('starts with all results', () => {
		cy.get('.article-snippet').should('have.length.above', 20);
	});

	it('can submit a search', () => {
		cy.get('#searchbar').type('title:commonjs').type('{enter}');
		cy.get('.article-snippet').should('have.length', 1);
		cy.get('.article-snippet>header>h2>a').each((el) => {
			expect(el.text().toLowerCase()).to.contain('commonjs');
		});
	});
});
