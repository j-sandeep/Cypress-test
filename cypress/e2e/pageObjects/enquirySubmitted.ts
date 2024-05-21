class EnquirySubmitted {
    isEnquirySubmittedSuccessfully() {
        cy.get('#main-content h2').should('contain', 'Thanks for reaching out');
    }
}

const enquirySubmitted = new EnquirySubmitted();
export default enquirySubmitted;