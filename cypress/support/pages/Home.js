class HomePage{
    constructor(){

        this.searchBtn = '#search_mini_form > .actions';
        this.searchInput = '#search';
        this.option = 'li#qs-option-0';
        this.nombreProd = '.product-item-link > .name';
        this.producto = '.item.product.product-item';
        this.filtros = '#layered-filter-block > .block-title > strong';
        this.fmemoria = '[attribute="movistar_internalmemory"] > .filter-options-content > .items > .item > a';
        this.fprecio = '.item:nth-child(3) > a > .price';
        this.Nitems = 'ol.products';
        this.items = '.toolbar-number';
        this.sort = '#sorter';

    }

    search = (element) =>{
        cy.get(this.searchBtn).click();
        cy.get(this.searchInput).type(element);
        cy.get(this.option).click();
    }

    filtroMemoria = (num) =>{
        cy.get(this.fmemoria).contains(num).click();
    }

    filtroPrecio = (pre) =>{
        cy.get(this.fprecio).contains(pre).should('be.visible').click();
    }

    getNombre(){
        return cy.get(this.nombreProd);
    }
    getProd(){
        return cy.get(this.producto);
    }

    getFiltro(){
        return cy.get(this.filtros);
    }

    getItems(){
        return cy.get(this.items);
    }
    getNitems(){
        return cy.get(this.Nitems);
    }

    getMenorMayor(){
        return cy.get(this.sort).select('Precio - Menor a Mayor');
    }
}

export default new HomePage();

