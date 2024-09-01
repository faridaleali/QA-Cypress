describe('Pruebas en compra de usuarios', () => {
	let users, products, info;

	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/');

		cy.fixture('users').then((data) => { users = data; });
		cy.fixture('products').then((data) => { products = data.products; });
		cy.fixture('information').then((data) => { info = data.information; });
	});

	function realizarCompra() {
		products.forEach((product) => {
			cy.dataTestClick(product);
		});

		cy.dataTestClick("shopping-cart-link");
		cy.dataTestClick("checkout");

		cy.information(info.firstName, info.lastName, info.postalCode);

		cy.dataTestClick("continue");
		cy.dataTestClick("finish");
		cy.dataTestClick("back-to-products");

		cy.get('#react-burger-menu-btn').contains('Open Menu').click();
		cy.dataTestClick("logout-sidebar-link");
	}

	it('Compra con user standard_user', () => {
		cy.login(users.standard_user.username, users.standard_user.password);
		realizarCompra();
	});

	it('Compra con user problem_user', () => {
		cy.login(users.problem_user.username, users.problem_user.password);
		realizarCompra();
	});
});
