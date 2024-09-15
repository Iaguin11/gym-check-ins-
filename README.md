# Projeto Check-ins em Academias

Bem-vindo ao Check-ins em Academias! Este aplicativo, construído com Node.js e Fastify, visa simplificar o processo de registro e gerenciamento de check-ins em academias. Com ele, você pode:

- Registrar Check-ins: Realize check-ins na academia de maneira rápida e eficiente.
- Visualizar Histórico: Acompanhe seu histórico de check-ins e mantenha-se motivado.
- Gerenciar Usuários: Administradores podem gerenciar usuários e acessar relatórios detalhados.
## Recursos
- Interface Intuitiva: Design fácil de usar e amigável.
- Relatórios e Análises: Acesse insights sobre frequência e padrões de uso.
- Segurança: Protege dados e informações pessoais dos usuários.
## Tecnologias
- Node.js: Ambiente de execução para JavaScript no lado do servidor.
- Fastify: Framework web rápido e de baixo overhead para Node.js.

#  RFS (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar 
- [ ] Deve ser possível se autenticar 
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias próximas
- [ ] Deve ser possível o usuário buscar academias pelo nomes 
- [ ] Deve ser possível o usuário realizar check-in em um academia 
- [ ] Deve ser possível cadastrar uma academia 

# RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

# RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);




# Segurança 

A validação no backend ajuda a proteger a aplicação contra entradas maliciosas. 
Mesmo que os dados sejam validados no frontend, um usuário mal-intencionado pode 
manipular a requisição HTTP diretamente, ignorando as validações do frontend. 
A validação no backend garante que quaisquer dados enviados sejam verificados e 
filtrados, protegendo a aplicação de possíveis ataques.
