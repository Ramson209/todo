describe('Input form', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('Input form should focus on Load', () => {
		cy.focused().should('have.class', 'input');
	});
	it('should accept input', () => {
		const typedTexts = 'Save for a house';

		cy.get('.input').type(typedTexts).should('have.value', typedTexts);
	});

	context('Input add todo', () => {
		const newTask = 'Buy new Shoe';
		it('Add new todo on Enter key pressed', () => {
			cy.get('.input').type(newTask).type('{enter}').should('have.value', '');
			cy.get('.todos .task').should('have.length', 1).and('contain', newTask);
		});
	});
});
