describe('Tempestuous Triangles browser tests', () => {
  it('visits the page', () => {
    cy.visit('http://127.0.0.1:8887');
  });

  it('displays invisible text', () => {
    cy.wait(4000);
    cy.get('.invisible', { force: true, timeout: 10000 });
  });
});
