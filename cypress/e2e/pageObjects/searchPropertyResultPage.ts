class SearchPropertyResultPage {
    isPropertyResultsPageVisible(text: string) {
        cy.get('h1.main-sr-title', { timeout: 20000}).should('contain', text);
    }
}

const searchPropertyResultPage = new SearchPropertyResultPage();
export default searchPropertyResultPage;