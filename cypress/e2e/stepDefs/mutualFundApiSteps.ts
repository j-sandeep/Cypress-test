import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { Scheme } from "../model/scheme";

const baseUrl = 'https://api.mfapi.in';

When(/^I query scheme name '(.+)' to '(.+)'$/, function (name: string, address: string) {
    let urlToquery = baseUrl + address;
    cy.request({
        url: urlToquery, 
        qs: { 
            "q": name
        },
        timeout: 10000
    }).as('mfResponse')
});

Then(/^I expect to get the scheme code as (\d+) for '(.+)'$/, (code: number, name: string) => {
    let expectedObj = new Scheme();
    expectedObj.schemeCode = code;
    expectedObj.schemeName = name;
    cy.get('@mfResponse').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0]).eql(expectedObj);        
    })
})
