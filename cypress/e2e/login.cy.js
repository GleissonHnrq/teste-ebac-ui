/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

    it('Fazer login com sucesso', () =>{
        cy.visit('https://www.automationpratice.com.br/login')
    })

    it('Tentativa de login com e-mail inválido', () =>{
        // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Tentativa de login com senha inválida', () =>{
        // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
})