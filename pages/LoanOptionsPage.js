class LoanOptionsPage {

    elements = {
        menu: () => cy.get('.MobileHeader__MenuButton-sc-nk4bm-3'),
        settings: () => cy.get('.MobileNavigationMenu__BorrowerNavLink-sc-1hqmp7n-3').contains('Settings')
    }

    paymentNav(selection) {
        this.elements.menu().click();
        this.elements.settings().click();
    }
}

export default LoanOptionsPage;