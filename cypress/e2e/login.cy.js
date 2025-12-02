/// <reference types="cypress" />

  it(' login avec des credentiels valide',{tags:[ "@valid","@cedric"]}, () => { 
    cy.visit("https://www.saucedemo.com")
    cy.get("#user-name").type("standard_user1")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get("span.title").should("be.visible")
  })

   it(' login invalid',  {tag: "@invalid"},() => { 
    cy.visit("https://www.saucedemo.com")
    cy.get("#user-name").type("standard_user1")
    cy.get("#password").type("Abdou")
    cy.get("#login-button").click()
    cy.get("h3[data-test='error']").should("be.visible")
   })
