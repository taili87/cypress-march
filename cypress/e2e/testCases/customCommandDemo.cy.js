
describe('CustomeCommand Suite', ()=> {
  beforeEach(()=>{
    cy.visit('/admin/');
  })
    
    it('Login one', ()=> {
        cy.Login().then(()=>{
            cy.log('logging successfully and on the Dashboard!!')
        });
        
    })

    it('Login two', ()=> {
        cy.Login().then(()=>{
            cy.log('logging successfully and on the Dashboard!!')
        });
        
    })

    it('Login Three', ()=> {
        cy.Login().then(()=>{
            cy.log('logging successfully and on the Dashboard!!')
        });
        
    })
})
