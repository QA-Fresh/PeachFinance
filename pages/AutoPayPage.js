class AutoPayPage {

    elements = {
        enableAp: () => cy.get('.Button__StyledButton-sc-1irh7c3-0').contains('Enable Autopay'),
        frenquency: () => cy.get('.select').contains('Select frequency'),
        selectPay: () => cy.get('.select').contains('Select payment method'),
        weeklySel: () => cy.get('.select__menu').contains('Monthly'),
        selectDay: () => cy.get('.select').contains('Select day'),
        first: () => cy.get('.select__menu').contains('1st'),
        payment: () => cy.get('.select').contains('Select payment method'),
        card: () => cy.get('.select__menu').contains('Debit Card *0004'),
        submit: () => cy.get('.Button__StyledButton-sc-1irh7c3-0').contains('Set Autopay'),
        accounts: () => cy.get('.LoanCardLink__LoanCardListLink-sc-1bi8ids-0')
    }

    selectFreq() {
        this.elements.frenquency().click();
        this.elements.weeklySel().click();
        this.elements.selectDay().click();
        this.elements.first().click();
    }

    selectPayment() {
        this.elements.payment().click();
        this.elements.card().click();
    }

    enableAuto() {
        this.elements.accounts().click();
        this.elements.enableAp().click();
        this.selectFreq();
        this.selectPayment();
        this.elements.submit().click();
    }

}

export default AutoPayPage; 