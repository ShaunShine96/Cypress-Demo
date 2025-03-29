describe("Write a Cypress test case; Login, Verify form and Fill the form", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    // Ignore uncaught exceptions
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (
        err.message.includes(
          "Cannot read properties of undefined (reading 'top')"
        )
      ) {
        return false;
      }
    });

    cy.fixture("urls.json").then(({ url3 }) => {
      cy.visit(url3);
    });

    cy.fixture("urls.json").as("urlNewReq");
  });

  it("Question 3 || a) Login", () => {
    // Verify the correct website
    cy.url().should("include", "/jw/web/userview/isr/isr/_/home");

    // Verify and validate the website already reached by using some element
    cy.get("#header-link span").should(
      "contain.text",
      "Internal Service Request"
    );

    cy.get(".login_link", { timeout: 60000 }).click();
    cy.get("#j_username", { timeout: 60000 })
      .should("be.visible")
      .clear()
      .type("cat");
    cy.get("#j_password", { timeout: 60000 })
      .should("be.visible")
      .clear()
      .type("password");
    cy.get('input[value="Login"]').click();

    cy.get("span").contains("Welcome").should("be.visible");
  });

  it("Question 3 || b) Verify that this form cannot submit until all required fields are filled.", () => {
    cy.wait(3000);
    cy.get(".login_link", { timeout: 60000 }).click();
    cy.get("#j_username", { timeout: 60000 })
      .should("be.visible")
      .clear()
      .type("cat");
    cy.get("#j_password", { timeout: 60000 })
      .should("be.visible")
      .clear()
      .type("password");
    cy.get('input[value="Login"]').click();

    cy.get("@urlNewReq").then((urlNewReq) => {
      // Platform Navigation
      cy.visit(urlNewReq.url4);
    });

    // Verify the correct website
    cy.url().should("include", "/jw/web/userview/isr/isr/_/new_request");

    // Verify form are required to fill
    cy.get("#assignmentComplete").should("be.visible").click();
    // Will throw error
    cy.get(".form-message.form-errors", { timeout: 60000 }).should(
      "contain.text",
      "Validation Error"
    );

    cy.get("@urlNewReq").then((urlNewReq) => {
      // Platform Navigation
      cy.visit(urlNewReq.url4);
    });

    cy.get("#subject", { timeout: 60000 })
      .should("be.visible")
      .clear()
      .type("Syakirah Zuhayra binti Suarel");

    cy.get(":nth-child(4) > #description")
      .invoke("val", "Test")
      .trigger("input");

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7); // Add 7 days

    // Format as DD-MM-YYYY
    const formattedDate = futureDate
      .toLocaleDateString("en-GB")
      .replace(/\//g, "-"); // Convert 30/03/2025 to 30-03-2025

    cy.get('input[name="duedate"]')
      .invoke("removeAttr", "readonly") // Remove readonly
      .clear()
      .type(formattedDate)
      .should("have.value", formattedDate);

    cy.get(".dropzone") // Select the Dropzone container
      .attachFile("dummy-file.pdf", { subjectType: "drag-n-drop" });

    cy.wait(2000); // Wait for UI update
    cy.get(".form-fileupload-value").should("contain", "dummy-file.pdf");

    cy.get("#assignmentComplete").should("be.visible").click();
  });
});
