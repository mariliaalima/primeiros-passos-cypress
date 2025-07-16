import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashBoardPage from '../pages/dashBoardPage.js'

const loginPage = new LoginPage()
const DashBoardPage = new dashBoardPage()

describe('Login Orange HRM test', () => {

  const selectorsList = {
     }

    it('Login - Fail', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userFailed.userName, userData.userFailed.password)
    loginPage.checkAccesInvalid()

    })
    it('Login - Success', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
    DashBoardPage.checkDashBoardPage()

    })
   
})