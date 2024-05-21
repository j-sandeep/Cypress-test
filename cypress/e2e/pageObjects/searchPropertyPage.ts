class SearchPropertyPage {
    enterSearchCriterionAndSelect(text: string) {
        cy.get('#ccc-module #ccc-close').click();
        cy.get('#location').clear().type(text).wait(10000);
        cy.get('.addresList li').first().as('areaSearched').click();
    }

    clickSearchButton() {
        cy.get('[type="submit"]').click();
    }
}

const searchPropertyPage = new SearchPropertyPage();
export default searchPropertyPage;