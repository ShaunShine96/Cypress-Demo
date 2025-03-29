describe("Write a Cypress test case to verify that a user can navigate to different pages.", () => {
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

    cy.fixture("url-navigation.json").as("urlNav");
  });

  it("Question 2", () => {
    cy.fixture("urls.json").then(({ url2 }) => {
      cy.visit(url2);
    });
    // Verify the correct website
    cy.url().should("include", "/");

    // Verify and validate the website already reached by using some element
    cy.get('a[href="http://joget.com"]', { timeout: 60000 }).should(
      "contain.text",
      "Joget.com"
    );
    cy.wait(3000); // Wait for 3 sec
    cy.get("@urlNav").then((urlNav) => {
      // Platform Navigation
      cy.visit(urlNav.overviewPlatform);
      cy.visit(urlNav.innovationStack);
      cy.visit(urlNav.futureReadiness);
      cy.visit(urlNav.platform);
      cy.visit(urlNav.support);
      cy.visit(urlNav.guide);

      // Solutions Navigation
      cy.visit(urlNav.overviewSolutions);
      cy.visit(urlNav.devPersona);
      cy.visit(urlNav.orgType);
      cy.visit(urlNav.indsSector);
      cy.visit(urlNav.successStories);

      // Partner Network Navigation
      cy.visit(urlNav.overviewPartnerNet);
      cy.visit(urlNav.findPartner);
      cy.visit(urlNav.becomePartner);
      cy.visit(urlNav.partnerSignUp);
      cy.visit(urlNav.ieiProg);

      // About Navigation
      cy.visit(urlNav.overviewAbout);
      cy.visit(urlNav.ourStory);
      cy.visit(urlNav.leadership);
      cy.visit(urlNav.careers);
      cy.visit(urlNav.lifeJoget);
      cy.visit(urlNav.media);
      cy.visit(urlNav.contactUs);
      cy.visit(urlNav.event);

      // Blog Navigation
      cy.visit(urlNav.overviewBlog);
      cy.visit(urlNav.highlights);
      cy.visit(urlNav.insights);
      cy.visit(urlNav.updates);
    });
  });
});
