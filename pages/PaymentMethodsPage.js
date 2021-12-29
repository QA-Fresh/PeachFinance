class paymentMethods {

    elements = {
        addPaymentBtn: () => cy.get('.Button__StyledButton-sc-1irh7c3-0').contains('Add payment method'),
        bankACH: () => cy.get('.btn-label').contains('Bank Account (ACH)'),
        debitCard: () => cy.get('.btn-label').contains('Debit Card'),
        firstName: () => cy.get('.material-styled-animation').contains('FIRST NAME'),
        lastName: () => cy.get('.material-styled-animation').contains('LAST NAME'),
        creditCard: () => cy.get('.material-styled-animation').contains('CARD NUMBER'),
        expiration: () => cy.get('.material-styled-animation').contains('EXP'),
        cvc: () => cy.get('.material-styled-animation').contains('CVC'),
        zip: () => cy.get('.material-styled-animation').contains('ZIP'),
        addBtn: () => cy.get('.main-actions').contains('Add'),
        done: () => cy.get('.main-actions').contains('Done'),
        global: () => cy.get('.MobileHeader__Left-sc-nk4bm-1')
    }

    addDebitCard(first,last,cc,exp,cvc,zip) {
        this.elements.debitCard().click();
        this.elements.firstName().type(first);
        this.elements.lastName().type(last);
        this.elements.creditCard().type(cc);
        this.elements.expiration().type(exp);
        this.elements.cvc().type(cvc);
        this.elements.zip().type(zip);
        this.elements.addBtn().click();
        this.elements.done().click();
        this.elements.global().click();
    }
}

export default paymentMethods;