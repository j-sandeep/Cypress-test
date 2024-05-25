export class EnquirySubmitted {
    isEnquirySubmittedSuccessfully() {
        cy.get('.page-body h1').should('contain', 'Input Validation Response');
    }
}
