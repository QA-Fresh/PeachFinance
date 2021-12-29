class LogoutPage {

    elements = {
       signout: () => cy.get('.FooterLinks__Link-sc-1rlouvg-1').contains('Sign out')
    }

    logout() {
        this.elements.signout().click();
    }
}

export default LogoutPage;