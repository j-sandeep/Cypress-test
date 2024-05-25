export class ValuesPage {
    // Selector strings
    private header: string = '#main-content h1';

    // Values
    private headerTitle_Expected = 'Our Purpose and Values';

    // Methods
    isTitleCorrect() {
        cy.get(this.header).should('contain.text', this.headerTitle_Expected);
    }
}
