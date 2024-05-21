class ValuesPage {
    isTitleCorrect() {
        cy.get('#main-content h1').should('contain.text', 'Our Purpose and Values');
    }
}

const valuesPage = new ValuesPage();
export default valuesPage;