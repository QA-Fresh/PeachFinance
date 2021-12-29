class makePayment {

    elements = {
        makePaymentBtn: () => cy.get('.Button__StyledButton-sc-1irh7c3-0'),
        datePicker: () => cy.get('.DatepickerStyles__Container-sc-pi6kcl-2'),
        overDue: () => cy.get('#Overdue'),
        upcomingOverdue: () => cy.get('#Upcoming + Overdue'),
        remainBalance: () => cy.get('#Remaining balance'),
        otherAmount: () => cy.get('Other amount'),
        paymentTypeDrop: () => cy.get('.select__indicator select__dropdown-indicator'),
        continueBtn: () => cy.get('.Button__StyledButton-sc-1irh7c3-0').contains('Continue')
    }

    selectDate(date) {
       this.elements.datePicker().clear();
       this.elements.datePicker().type(date);
    }

    selectAmountType(amount) {
        switch(amount) {
            case 'overdue':
                this.elements.overDue().click();
                break;
            case 'upcoming':
                this.elements.upcomingOverdue().click();
                break;
            case 'remaining':
                this.elements.remainBalance().click();
                break;
            case 'other':
                this.elements.otherAmount().click();
                break;
        }
    }

    selectPaymentType(payment) {
        this.elements.paymentTypeDrop().click();

    }
}

export default makePayment;