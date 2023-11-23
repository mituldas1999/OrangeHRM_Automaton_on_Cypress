

describe("login to orange HRM",()=>{
    it("should be login to ORNG_HRM with valid info",()=>{
        cy.login("Admin","admin123");

    });
    it("should be click on PIM button after login",()=>{
        cy.login("Admin","admin123");
        cy.get(".oxd-main-menu-item").eq(1).click({ force: true });
    });
    it("should be click on add button after clicking PIM button",()=>{
        cy.login("Admin","admin123");
        cy.get(".oxd-main-menu-item").eq(1).click({ force: true });
        cy.get(".oxd-button").eq(2).click({ force: true });
    });
    it("should be create an employee",()=>{
        cy.login("Admin","admin123");
        cy.get(".oxd-main-menu-item").eq(1).click({ force: true });
        cy.get(".oxd-button").eq(2).click({ force: true });
        cy.employeeCreate("Elaina", "Ela", "eru","eru09","elayna001", "Eru@0001", "Eru@0001");
    });
    it("should click on leave button",()=>{
        cy.login("Admin","admin123");
        cy.get(".oxd-main-menu-item").eq(2).click({force:true});
    });
    it("Apply for leave",()=>{
        cy.login("Admin","admin123");
        cy.get(".oxd-main-menu-item").eq(2).click({force:true});
        cy.get(".oxd-input").eq(1).click({force:true});
        cy.SelectDateFromCalander('2023-05-12');
        cy.get('.oxd-select-text').eq(0).trigger('mousedown', { force: true });
        cy.get('.select-wrapper').select('Pending');
          cy.get('.oxd-select-dropdown --position-bottom', { timeout: 10000 })
            .should('be.visible')
            .should('contain', 'Scheduled'); 
    })
    it("search enable employee from Admin",()=>{
        cy.login("Admin","admin123");
        cy.get(".oxd-main-menu-item").eq(0).click({force:true});
        cy.SearchAdmin("etu","admin");

    })
    // it("should be click on dropdown",()=>{
    //     cy.login("Admin","admin123");
    //     cy.wait(1000)
    //     cy.get(".oxd-userdropdown").eq(0).click({force:true});
    //     cy.wait(1000)
    //     cy.get(".oxd-userdropdown-link").eq(2).click({force:true});
    // });
})