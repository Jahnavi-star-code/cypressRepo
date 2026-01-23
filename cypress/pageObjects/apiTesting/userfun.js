import Ajv from "ajv";
import { validateSchema } from "../../support/schemaValidator";
import schemaValidation from "../../fixtures/schemaValidation";
const ajv = new Ajv({ allErrors: true });
export default class petStore {
  static addPet = () => {
    const requestBody = [
      {
        id: 1,
        username: "jahnavi",
        firstName: "jahnavi",
        lastName: "b",
        email: "reddyjanu45@gmail.com",
        password: "Vikranth@345",
        phone: 773736378,
        userStatus: 1,
      },
      {
        id: 2,
        username: "jahnavi",
        firstName: "jahnavi",
        lastName: "b",
        email: "reddyjanu45@gmail.com",
        password: "Vikranth@345",
        phone: 773736378,
        userStatus: 1,
      },
    ];
    validateSchema(schemaValidation.createUserReq, requestBody);
    return cy
      .api({
        url: "/user/createWithArray",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
      .then((res) => {
        const resp = res.body;
        expect(res.status).to.eql(200);
        validateSchema(schemaValidation.createUserRes, res.body);
      });
  };
  static getUser = () => {
    cy.api({
      url: "/user/user1",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(200);
      validateSchema(schemaValidation.getUserRes, res.body);
    });
  };
}
