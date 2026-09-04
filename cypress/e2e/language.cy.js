describe("Language Switching", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("defaults to English", () => {
    cy.contains("Open to work").should("be.visible");
  });

  it("switches to Japanese", () => {
    cy.get("button").contains("日本語").click({ force: true });
    cy.contains("仕事募集中").should("be.visible");
  });

  it("switches to Filipino", () => {
    cy.get("button").contains("Filipino").click({ force: true });
    cy.contains("Bukas sa trabaho").should("be.visible");
  });

  it("switches back to English", () => {
    cy.get("button").contains("English").click({ force: true });
    cy.contains("Open to work").should("be.visible");
  });

});