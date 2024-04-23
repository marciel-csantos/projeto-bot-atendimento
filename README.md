# Projeto Bot de Atendimento

Este é um projeto de um BOT de atendimento para o aplicativo Telegram, desenvolvido como parte de um trabalho acadêmico.

## Funcionalidades

- **Horário Comercial**: O BOT responde às mensagens recebidas durante o horário comercial (09:00 às 18:00) com um link para o site da empresa.
- **Fora do Horário Comercial**: Fora do horário comercial, o BOT solicita o e-mail do usuário para que a empresa possa entrar em contato.
- **Armazenamento de E-mails**: Os e-mails fornecidos pelos usuários são armazenados em um banco de dados SQLite usando o ORM Prisma.

## Configuração e Uso

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o BOT com `node index.js`.
4. Interaja com o BOT no Telegram.

## Dependências

- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api): Biblioteca para interagir com a API do Telegram.
- [@prisma/client](https://www.npmjs.com/package/@prisma/client): Cliente Prisma para acesso ao banco de dados.
- [sqlite3](https://www.npmjs.com/package/sqlite3): Driver SQLite para Node.js.

## Autor

Marciel

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
