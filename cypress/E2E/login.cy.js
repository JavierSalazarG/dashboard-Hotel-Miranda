describe("MY furst test", () => {
  it("Si introduzco los datos correctos me lleva a /home", () => {
    cy.visit("http://localhost:5173/");
  });
});
