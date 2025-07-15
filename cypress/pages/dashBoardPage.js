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
 
    }
}
export default dashBoardPage