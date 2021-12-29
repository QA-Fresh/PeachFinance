class LoginPage {

elements = {
    username: () => cy.get('.LoginFormCard__Contents-sc-1d8bieu-3').contains('Email'),
    password: () => cy.get('.LoginFormCard__Contents-sc-1d8bieu-3').contains('Password'),
    loginBtn: () => cy.get('.LoginSubmitButton__SubmitButton-sc-t1j2zs-1'),
    errorState: () => cy.get('.LoginSubmitButton__ErrorMessage-sc-t1j2zs-3').contains('Not authorized'),
    logo: () => cy.get('.CompanyLogo__Logo-sc-1042qqd-0')
}

login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginBtn().click();
}

homeReturn() {
    this.elements.logo().click();
}

}

export default LoginPage;