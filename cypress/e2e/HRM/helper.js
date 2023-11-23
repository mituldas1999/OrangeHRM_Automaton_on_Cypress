export const login = (userId, password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(".oxd-input").eq(0).click().type(userId);
        cy.get(".oxd-input").eq(1).click().type(password);
        cy.get("form").submit();
  };
  export const employeeCreate = (firstname, middlename, lastname,employeeid,username, password, confirmpassword) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
   
        cy.get(".oxd-input").eq(1).click().type(firstname);
        cy.get(".oxd-input").eq(2).click().type(middlename);
        cy.get(".oxd-input").eq(3).click().type(lastname);
        cy.get(".oxd-input").eq(4).click().type(employeeid,);
        cy.get(".oxd-switch-input").eq(0).click({force:true});
        cy.get(".oxd-input").eq(5).click().type(username);
        cy.get(".oxd-input").eq(6).click().type(password);
        cy.get(".oxd-input").eq(7).click().type(confirmpassword);
        cy.get(".oxd-button").eq(1).click({ force: true });
  };

  export const SelectDateFromCalander = (fromDate) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
   
    cy.get('.oxd-date-input-calendar')
  .should('be.visible')
  .click({force:true})
 
  cy.get('.oxd-date-input-calendar').contains(fromDate)
  .then(($date) => {
    cy.wrap($date).click();
  });
    cy.wait(2000);
    cy.get('.transactionDiv').should('not.exist');
  };
  
  export const SearchAdmin = (username,employyName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
   
    cy.get(".oxd-input").eq(1).click().type(username);
    cy.get(".oxd-select-text").eq(0).click({force:true});
    cy.get(".oxd-select-dropdown").should('be.visible').click();
    cy.get(".oxd-autocomplete-text-input").eq(0).click().type(employyName);
    cy.get(".oxd-select-text").eq(1).click({force:true});
    cy.get(".oxd-select-dropdown").should('be.visible').click();
    cy.get(".oxd-button").eq(1).click({force:true});
  };
  // export const applyLeave = (fromDate, toDate,leaveStatus, leaveType, employeeName) => {
  //   const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  //   Cypress.on("uncaught:exception", (err) => {
  //     /* returning false here prevents Cypress from failing the test */
  //     if (resizeObserverLoopErrRe.test(err.message)) {
  //       return false;
  //     }
  //   });

  //       cy.get(".oxd-input").eq(1).click().type(fromDate);
  //       cy.get('input[type="fromDate"]').click(); // Locate the date picker input element and click it to open the calendar
  //       cy.get(".oxd-input").eq(2).click().type(toDate);
  //       cy.get(".oxd-select-text").eq(0).click().type(leaveStatus);
  //       cy.get(".oxd-select-text").eq(1).click().type(leaveType);
  //       cy.get(".oxd-autocomplete-text-input").eq(0).click({force:true}).type(employeeName);
        
      
  // };