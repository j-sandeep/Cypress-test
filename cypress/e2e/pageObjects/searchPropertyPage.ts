export class SearchPropertyPage {

    // Selectors 
    private closeCookiesInfoBtn = '#ccc-module #ccc-close';
    private locationTxt = '#location';
    private addresses = '.addresList li';
    private submitBtn = '[type="submit"]';
    
    // Methods 
    enterSearchCriterionAndSelect(text: string) {
        cy.get(this.closeCookiesInfoBtn).click();
        cy.get(this.locationTxt).clear().type(text).wait(10000);
        cy.get(this.addresses).first().as('areaSearched').click();
    }

    clickSearchButton() {
        cy.get(this.submitBtn).click();
    }
}
