describe("verify this page is displayed correctly.", () => {
  beforeEach(() => {
    cy.fixture("urls.json").then(({ url1 }) => {
      cy.visit(url1);
    });
  });

  it("Question 1", () => {
    // Verify the correct website
    cy.url().should("include", "/jw/web/userview/appcenter/v/_/home");

    // Verify and validate the website already reached by using some element
    cy.get("#header-link span", { timeout: 60000 }).should(
      "contain.text",
      "Joget DX"
    );
  });
});
