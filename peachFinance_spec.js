import AutoPayPage from './pages/AutoPayPage';
import LoanOptionsPage from './pages/LoanOptionsPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import PaymentMethods from './pages/PaymentMethodsPage';
import SettingsPage from './pages/SettingsPage';

describe('Peach-Finance auth and loan test case', () => {
  beforeEach(() => {
    cy.visit('https://peach-borrower.peach-dev.finance/login')
  })

    it('1. With correct credentials, login should be successful', () => {
      let ap = new AutoPayPage();
      let lo = new LoanOptionsPage();
      let lp = new LoginPage();
      let lg = new LogoutPage();
      let pm = new PaymentMethods();
      let sp = new SettingsPage();
      lp.login('auto.user+bo-pboq-2qlj@peachfinance.com','hello12345');
      lo.paymentNav();
      sp.addPayment();
      pm.addDebitCard('John','Doe','4000160000000004','03/30','737','94509');
      lg.logout();
      lp.login('auto.user+bo-pboq-2qlj@peachfinance.com','hello12345');
      ap.enableAuto();
      lg.logout();
      cy.get('.LoginFormCard__Title-sc-1d8bieu-2').contains('Account Login').then(function(e){
        const t = e.text();
      expect(t).to.contains('Account Login');
    })
  })
  })
