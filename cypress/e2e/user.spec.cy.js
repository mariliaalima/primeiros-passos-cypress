import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashBoardPage from '../pages/dashBoardPage.js'
import menuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const DashBoardPage = new dashBoardPage()
const MenuPage = new menuPage()
const MyInfoPage = new myInfoPage()

describe('Orange test', () => {

  const selectorsList = {
    

  }

  it.only('User Info Update - Success', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    DashBoardPage.checkDashBoardPage()
    
    MenuPage.accesMyInfo()

    MyInfoPage.checkMyInfoPage()
 
    
    // cy.get(selectorsList.firstNameField).clear().type('First name test')
    // cy.get(selectorsList.middleName).clear().type ('test')
    // cy.get(selectorsList.lastNameField).clear().type('Last name test')
    // cy.get(selectorsList.genericField).eq(3).clear().type('Employeeid')
    // cy.get(selectorsList.genericField).eq(4).clear().type('otherid')
    // cy.get(selectorsList.genericField).eq(5).clear().type('drivers')
    // cy.get(selectorsList.date).eq(0).clear().type('2025-07-11')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericCombobox).eq(0).click();
    // cy.contains('div[role="option"]', 'Brazilian').click();
    // cy.get(selectorsList.genericCombobox).eq(1).click()
    // cy.contains('div[role="option"]', 'Single').click()
    // cy.get(selectorsList.saveButton).eq(0).click({force:true})
    // cy.get('.oxd-toast').should('contain', 'Successfully Updated')
   
  })
 //t.('login fail', () => {
  //cy.visit('/auth/login')
  //cy.get(selectorsList.usernameField).type(userData.userFail.userName)
  //cy.get(selectorsList.passwordField).type(userData.userFail.password)
 // cy.get(selectorsList.loginButton).click()
  //cy.get(selectorsList.wrongCredentialAlert)
 //)
})