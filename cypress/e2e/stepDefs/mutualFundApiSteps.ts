import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const baseUrl = 'https://api.mfapi.in';
let response: scheme[];

When("I query scheme name {string} to {string}", function (name: string, address: string) {
    let urlToquery = baseUrl + address;
    cy.request({
        url: urlToquery, 
        qs: { 
            "q": name
        },
        timeout: 10000
    }).then((resp) => {
        response = resp.body;
    });
});

Then("I expect to get the scheme code as {int} for {string}", (code: number, name: string) => {
    let expectedObj = new scheme();
    expectedObj.schemeCode = code;
    expectedObj.schemeName = name;
    expect(response).to.have.length(1);
    expect(response[0]).eql(expectedObj);
})

class scheme {
    schemeCode: number;
    schemeName: string = null;
}