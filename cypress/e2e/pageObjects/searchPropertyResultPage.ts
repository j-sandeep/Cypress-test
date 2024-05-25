export class SearchPropertyResultPage {
    // Selectors
    private header: string = 'h1.main-sr-title';

    isPropertyResultsPageVisible(text: string) {
        cy.get(this.header, { timeout: 20000 }).should('contain', text);
    }
}
