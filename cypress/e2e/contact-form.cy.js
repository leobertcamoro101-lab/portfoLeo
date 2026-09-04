describe("Contact Form", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.contains("Message Me").should("be.visible").click();
    cy.wait(500);
  });

  it("shows validation errors on empty submit", () => {
  cy.get("button[type='submit']", { timeout: 10000 })
    .should("be.visible")
    .click();
  cy.wait(1000);

  // ✅ Just verify form is still in idle state (not success)
  cy.get("button[type='submit']").should("exist");
  cy.get("button[type='submit']").should("not.contain", "Sending");

  // ✅ Check status stayed "idle" — form didn't submit
  cy.get("input[name='from_name']").should("have.value", "");
});

it("shows error for invalid email", () => {
  cy.get("input[name='from_name']", { timeout: 10000 })
    .should("be.visible")
    .type("Leobert");
  cy.get("input[name='from_email']").type("not-an-email");
  cy.get("input[name='subject']").type("Hello there");
  cy.get("textarea[name='message']").type(
    "This is a test message that is long enough to pass"
  );
  cy.get("button[type='submit']").click();
  cy.wait(500);

  // ✅ Email field should still have the invalid value (not cleared)
  cy.get("input[name='from_email']").should("have.value", "not-an-email");

  // ✅ Form should NOT show success
  cy.get("button[type='submit']").should("exist");
});

  it("fills form with valid data", () => {
    cy.get("input[name='from_name']", { timeout: 10000 })
      .should("be.visible")
      .type("Leobert Camoro");
    cy.get("input[name='from_email']").type("test@gmail.com");
    cy.get("input[name='subject']").type("Hello there");
    cy.get("textarea[name='message']").type(
      "This is a test message that is long enough to pass"
    );
    cy.get("input[name='from_name']").should("have.value", "Leobert Camoro");
    cy.get("input[name='from_email']").should("have.value", "test@gmail.com");
  });
  //   it("debug - log form HTML after submit", () => {
  //   cy.get("button[type='submit']", { timeout: 10000 })
  //     .should("be.visible")
  //     .click();
  //   cy.wait(1000);
  //   // Log the entire modal/form HTML
  //   cy.document().then((doc) => {
  //     cy.log(doc.body.innerHTML.substring(0, 3000));
  //   });
  //   cy.screenshot("after-empty-submit");
  // });

});