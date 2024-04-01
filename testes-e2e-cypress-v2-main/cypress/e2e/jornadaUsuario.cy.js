describe('Jornadas de usuário', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(3000);
    cy.getByData('botao-login').click();
    cy.wait(3000);
    cy.getByData('email-input').type('neilton@alura.com');
    cy.wait(3000);
    cy.getByData('senha-input').type('123456');
    cy.wait(3000);
    cy.getByData('botao-enviar').click();
    cy.wait(3000);
  })
  it('Deve permitir que a pessoa usuária acesse a aplicação', () => {

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });

  it('Realizar uma transação e faça um logout', () => {

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});
