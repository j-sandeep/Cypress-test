import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { User } from "../model/user";

const baseUrlUsers = "https://reqres.in/";

When(/^I '(post|put)' following data to '(.+)' endpoint$/, (method: string, url: string, table: DataTable) => {
    const { id, first_name, last_name, email } = table.rowsHash();
    let user1: User = new User();
    let userJson: string;
    let fullUrl: string;
    switch (method) {
        case 'post':
            fullUrl = `${baseUrlUsers}${url}`;

            user1.first_name = first_name;
            user1.last_name = last_name;
            user1.email = email;
            userJson = JSON.stringify(user1);
            break; 
        case 'put':
            fullUrl = `${baseUrlUsers}${url}/${id}`;

            user1.first_name = first_name;
            user1.last_name = last_name;
            user1.email = email;
            userJson = JSON.stringify(user1);
            break; 
        }
    cy.request(method, fullUrl, userJson).as('userResponse');
});

Then(/^I expect to see status code (\d+)$/, (statusCode: number) => {
    cy.get('@userResponse').should((response) => {
        expect(response.status).to.eq(statusCode);
    })
});