class ComprasPage{
    constructor(){

        this.descuento = '#block-discount > .title';
        this.codigo = '#coupon_code';
        this.BtnCodigo = '#discount-coupon-form > .fieldset > .actions-toolbar > div.primary > .action';
        this.errorMsg = '.message-error > div';
        this.error = 'input#coupon_code.input-text';

    }

    codigoDesc = (code) =>{
        cy.get(this.descuento).click();
        cy.wait(3000);
        cy.get(this.error).should('be.visible');
        cy.get(this.codigo).click();
        cy.get('#coupon_code').type(code);
        cy.get(this.BtnCodigo).click();
    }

    getEr(){
        return cy.get(this.error);
    }
        
    getMnsj(){
        return cy.get(this.errorMsg);
    }

    getBtnCod(){
        return cy.get(this.items);
    }
    getNitems(){
        return cy.get(this.Nitems);
    }

    getMenorMayor(){
        return cy.get(this.sort).select('Precio - Menor a Mayor');
    }

}

export default new ComprasPage();
