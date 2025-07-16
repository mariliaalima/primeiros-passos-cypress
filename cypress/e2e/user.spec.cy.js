import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashBoardPage from '../pages/dashBoardPage.js'
import menuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance();
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
    MyInfoPage.fieldPersonalDetails(chance.first(), chance.string(), chance.last())
    MyInfoPage.fieldEmployee(chance.string({ length: 8 }), chance.string({ length: 5 }), chance.natural(), chance.date({string: true}))
    MyInfoPage.status('Brazilian', 'Other')
    MyInfoPage.save()
    })
// chance.integer({ min: -20, max: 20 })
// chance.string({ length: 5 })
// chance.word({ length: 5 })
 

})