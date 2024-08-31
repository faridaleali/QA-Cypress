describe('Pruebas en compra de usuarios', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  });

  it.only('Compra con user correctamente configurado', () => {

    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });

    cy.fixture('products').then((data) => {
      data.products.forEach((products) => {
        cy.dataTestClick(products);
      });
    });

    cy.dataTestClick("shopping-cart-link")
    cy.dataTestClick("checkout")

    cy.fixture('information').then((info) => {
      cy.information(info.information.firstName, info.information.lastName, info.information.postalCode);
    });

    cy.dataTestClick("continue")
    cy.dataTestClick("finish")
    cy.dataTestClick("back-to-products")

    cy.get('#react-burger-menu-btn').contains('Open Menu').click();
    cy.dataTestClick("logout-sidebar-link")
  })

  it('Compra con user configurado erronamente', () => {

    cy.fixture('users.json').then((users) => {
      cy.login(users.problem_user.username, users.problem_user.password);
    })

    cy.fixture('products.json').then((data) => {
      data.products.forEach((products) => {
        cy.dataTestClick(products);
      });
    });

    cy.dataTestClick("shopping-cart-link")
    cy.dataTestClick("checkout")

    //Error en el lastname
    cy.fixture('information').then((info) => {
      cy.information(info.information.firstName, info.information.lastName, info.information.postalCode);
    });

    cy.dataTestClick("continue")
    cy.dataTestClick("finish")
    cy.dataTestClick("back-to-products")

    cy.get('#react-burger-menu-btn').contains('Open Menu').click();
    cy.dataTestClick("logout-sidebar-link")
  })
})