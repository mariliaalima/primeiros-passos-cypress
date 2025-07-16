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

  it('User Info Update - Success', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)

    DashBoardPage.checkDashBoardPage()
    
    MenuPage.accesMyInfo()

    MyInfoPage.checkMyInfoPage()
    MyInfoPage.fieldPersonalDetails('Maria', 'Antônia', 'da Silva')
    MyInfoPage.fieldEmployee('employee', 'otherid', '123456', '29-07-2026')
    MyInfoPage.status('Brazilian', 'Other')
    MyInfoPage.save()
    })

 

})