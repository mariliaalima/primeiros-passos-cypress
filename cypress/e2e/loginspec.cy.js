import userData from '../fixtures/users/userData.json'

describe('Orange test', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashBoardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
  })
  it('login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.userName)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})