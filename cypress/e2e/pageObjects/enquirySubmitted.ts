class EnquirySubmitted {
    isEnquirySubmittedSuccessfully() {
        cy.get('#main-content h1').should('eql', 'Thank You');
    }
}

const enquirySubmitted = new EnquirySubmitted();
export default enquirySubmitted;