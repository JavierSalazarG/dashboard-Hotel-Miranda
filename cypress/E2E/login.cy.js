describe("Login test", () => {
  it("Si introduzco los datos correctos me lleva a /home", () => {
    cy.visit("http://localhost:5173/");
    cy.wait(1000);
    cy.get('[data-cy="inputUserEmail"]').type("admin@admin.com");
    cy.wait(1000);
    cy.get('[data-cy="inputPasswordUser"]').type("admin");
    cy.wait(1000);
    cy.get('[data-cy="loginButton"]').click();
    cy.location("pathname").should("include", "home");
    cy.wait(1500);
  });
  it("Si introduzco email incorrecto me salta un alert y no me daja avanzar ", () => {
    cy.visit("http://localhost:5173/");
    cy.wait(1000);
    cy.get('[data-cy="inputUserEmail"]').type("error@error.com");
    cy.wait(1000);
    cy.get('[data-cy="inputPasswordUser"]').type(12332);
    cy.wait(1000);
    cy.get('[data-cy="loginButton"]').click();

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include(
        "error al entrar, correo: admin@admin.com y password: admin"
      );
    });
    cy.location("pathname").should("not.include", "home");
    cy.wait(1500);
  });
  it("Si intento navegar a /home sin meter el login correcto me redirige a / ", () => {
    cy.visit("http://localhost:5173/home");
    cy.wait(1000);
    cy.location("pathname").should("include", "");
    cy.wait(1000);
    cy.visit("http://localhost:5173/");
    cy.wait(1000);
    cy.visit("http://localhost:5173/rooms");
    cy.wait(1000);
    cy.location("pathname").should("include", "");
  });
});
