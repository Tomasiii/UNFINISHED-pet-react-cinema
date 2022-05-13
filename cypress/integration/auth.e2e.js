const invalidEmail = "invalidEmail";
const invalidPassword = "Inv";

describe("auth", () => {
  it("login", () => {
    cy.visit("/auth");

    // email field

    cy.get("input[name=email]")
      .type(invalidEmail)
      .should("have.value", invalidEmail);
    cy.get("[data-test=auth-field-error]").should("have.length", 1);

    // login field

    cy.get("input[name=password]")
      .type(invalidPassword)
      .should("have.value", invalidPassword);
    cy.get("[data-test=auth-field-error]").should("have.length", 2);

    // click

    cy.get("button")
      .contains(/sign in/i)
      .click();

    // have already on auth page

    cy.get("input[name=email]");
    cy.get("input[name=password]");

    cy.findByPlaceholderText(/password/i);
  });
});
