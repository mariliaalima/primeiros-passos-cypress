import userData from '../fixtures/users/userData.json'

describe('Orange test', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashBoardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    date: "[placeholder='yyyy-dd-mm']",
    middleName: "[placeholder='Middle Name']",
    dateCloseButton: ".--close",
    selectButton: ".oxd-select-text--after"
    

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('First name test')
    cy.get(selectorsList.middleName).clear().type ('test')
    cy.get(selectorsList.lastNameField).clear().type('Last name test')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employeeid')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherid')
    cy.get(selectorsList.genericField).eq(5).clear().type('drivers')
    cy.get(selectorsList.date).eq(0).clear().type('2025-07-11')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectButton).eq(0).click()
   
  
    

  })
  it('login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.userName)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})