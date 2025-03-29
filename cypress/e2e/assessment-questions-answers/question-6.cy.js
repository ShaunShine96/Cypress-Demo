describe("Hide Navbar on Joget Website", () => {
  it("Question-6: Visits the website and hides the navbar", () => {
    cy.visit("https://www.joget.com/");

    // Ensure the navbar is visible before hiding
    cy.get("#menu-main-menu").should("be.visible");

    // Hide the navbar using JavaScript
    cy.get("#menu-main-menu").then(($nav) => {
      $nav.css("display", "none");
    });

    // Verify the navbar is hidden
    cy.get("#menu-main-menu").should("have.css", "display", "none");
  });
});
