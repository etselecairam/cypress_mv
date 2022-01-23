class ProductPage{
    constructor(){

        this.cuotasDescrip = '.price-installments > p > [display="inline"]';
        this.opciones = '#open-installments-modal';
        this.selectBanco = '#selectBank';
        this.selectTarj = '#selectCardByBank';
        this.tabla = '#bodyTable';
        this.BtnComprar = '#movistar-pdp-addtocart-button';

    }

    getBtnCompra(){
        return cy.get(this.BtnComprar);
    }

    getCuotasDescr(){
        return cy.get(this.cuotasDescrip);
        
    }

    getTabla(){
        return cy.get(this.tabla);
    }

    elegirCuotas = (banco, tarjeta) =>{
        cy.get(this.opciones).click();
        cy.get(this.selectBanco).select(banco);
        cy.get(this.selectTarj).select(tarjeta);

    }

}

export default new ProductPage();
