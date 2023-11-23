// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {employeeCreate, SearchAdmin, SelectDateFromCalander, login} from "../e2e/HRM/helper";

Cypress.Commands.add("login", (userId, password) => {
  login(userId, password);
})

Cypress.Commands.add("employeeCreate",(firstname, middlename, lastname,employeeid,username, password, confirmpassword)=>{
  employeeCreate(firstname, middlename, lastname,employeeid,username, password, confirmpassword);
});
Cypress.Commands.add("SelectDateFromCalander",(fromDate)=>{
  SelectDateFromCalander(fromDate);

});
Cypress.Commands.add("SearchAdmin",(username,employyName)=>{
  SearchAdmin(username,employyName);

});
// Cypress.Commands.add("applyLeave",(fromDate, toDate,leaveStatus, leaveType, employeeName)=>{
//   applyLeave(fromDate, toDate,leaveStatus, leaveType, employeeName);
// });