describe("Theme Switching", () => {

  beforeEach(() => {
    cy.visit("/");
    // Clear localStorage
    cy.clearLocalStorage();
  });

  it("defaults to light mode", () => {
    cy.get("html").should("not.have.class", "dark");
  });

  it("switches to dark mode", () => {
    // Open floating menu
    cy.get("button").contains("System").click({ force: true });
    cy.get("button").contains("Dark").click({ force: true });
    cy.get("html").should("have.class", "dark");
  });

  it("switches back to light mode", () => {
    cy.get("button").contains("Dark").click({ force: true });
    cy.get("html").should("have.class", "dark");
    cy.get("button").contains("Light").click({ force: true });
    cy.get("html").should("not.have.class", "dark");
  });

  it("persists theme on page reload", () => {
    cy.get("button").contains("Dark").click({ force: true });
    cy.reload();
    cy.get("html").should("have.class", "dark");
  });

});