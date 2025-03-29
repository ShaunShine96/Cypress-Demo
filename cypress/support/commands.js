import "cypress-file-upload";

// Custom command for file upload
Cypress.Commands.add("uploadFile", (selector, fileName, fileType = "") => {
  cy.get(selector).attachFile({ filePath: fileName, mimeType: fileType });
});
