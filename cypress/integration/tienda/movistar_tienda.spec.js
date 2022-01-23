import HomePage from "../../support/pages/Home.js";
import ProductPage from "../../support/pages/Productos.js";
import ComprasPage from "../../support/pages/Carrito.js";

describe('Tests Movistar', () => {
  beforeEach(() => {
    cy.visit('https://tienda.movistar.com.ar');
    })

  it('CP001', () => {

    HomePage.search('A52')
  
    HomePage.getNombre().should('include.text', 'A52').click();
    cy.url().should('eq', 'https://tienda.movistar.com.ar/samsung-galaxy-a52.html');
    ProductPage.getCuotasDescr().should('include.text', 'Hasta 12 cuotas');
    
  })

  it('CP002', () => {
    cy.viewport(1024, 768);

    HomePage.getFiltro().click();

    HomePage.filtroMemoria('256');

    HomePage.getFiltro().click();
    cy.get('.filter-value').contains('256');
    HomePage.getFiltro().click();
    cy.wait(4000);
    HomePage.filtroPrecio('200.000');
    cy.url().should('eq', 'https://tienda.movistar.com.ar/?movistar_internalmemory=916&price=200000-300000');
    cy.wait(4000);
    HomePage.getProd();
    HomePage.getItems().should('contain', '1');
    cy.screenshot();
  })

  it('CP003', () => {
    
    HomePage.getProd().eq(2).click();

    ProductPage.elegirCuotas('Credicoop', 'Visa' );

    ProductPage.getTabla().should('not.contain', '"60"');
  })

  it('CP004', () => {
    HomePage.getProd().eq(0).click();
    
    ProductPage.getBtnCompra().click();

    ComprasPage.codigoDesc('codigo');

    cy.wait(3000);

    ComprasPage.getMnsj().should('contain', 'no es válido');
  })

  it('CP005', () => {

    HomePage.getMenorMayor();
    HomePage.getProd().eq(0).should('contain','Alcatel');
  })

})
