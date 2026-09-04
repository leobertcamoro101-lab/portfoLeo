describe("Navigation", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the home page", () => {
    cy.contains("Leobert Camoro").should("be.visible");
  });

  it("scrolls to projects section", () => {
    cy.get("a[href='#projects']").first().click();
    cy.get("#projects").should("be.visible");
  });

  it("scrolls to skills section", () => {
    cy.get("a[href='#skills']").first().click();
    cy.get("#skills").should("be.visible");
  });

  it("scrolls to contact section", () => {
    cy.get("a[href='#contact']").first().click();
    cy.get("#contact").should("be.visible");
  });

  it("navigates to About Me page", () => {
    cy.contains("About Me").first().click();
    cy.url().should("include", "/aboutMe");
    cy.contains("Leobert Camoro").should("be.visible");
  });

  it("navigates back to portfolio from About Me", () => {
    cy.visit("/aboutMe");
    cy.contains("← Portfolio").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

});