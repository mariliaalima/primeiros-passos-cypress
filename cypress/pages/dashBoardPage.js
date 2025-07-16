class dashBoardPage {
    selectorsList(){
        const selectors = {
            dashBoardGrid: ".orangehrm-dashboard-grid",
            
        }
        return selectors
    }
    checkDashBoardPage() {
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashBoardGrid).should('be.visible')
   //
    //ickMyInfo
       //y.get(this.selectorsList().dashBoardGrid)
      //cy.get(this.selectorsList.myInfoButton).click()
    }
}
export default dashBoardPage