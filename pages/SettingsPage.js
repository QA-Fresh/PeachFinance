class SettingsPage {

    elements = {
        addPayment: () => cy.get('.Button__StyledButton-sc-1irh7c3-0').contains('Add payment method')
    }

    addPayment() {
        this.elements.addPayment().click();
    }
}

export default SettingsPage;