const TelegramBot = require('node-telegram-bot-api');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const token = ''; 

const bot = new TelegramBot(token, { polling: true });

function isHorarioComercial() {
    const horaAtual = new Date().getHours();
    return horaAtual >= 9 && horaAtual < 18;
}

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const nomeUsuario = msg.from.first_name;
    const texto = msg.text;

    if (isHorarioComercial()) {
        bot.sendMessage(chatId, `Olá ${nomeUsuario}! O horário comercial é de 09:00 às 18:00. Acesse: https://faesa.br`);
    } else {
        if (texto.includes('@')) {
            try {
                await prisma.user.create({
                    data: {
                        email: texto
                    }
                });
                bot.sendMessage(chatId, `O e-mail ${texto} foi salvo com sucesso!`);
            } catch (error) {
                console.error('Erro ao salvar o e-mail:', error);
                bot.sendMessage(chatId, 'Ocorreu um erro ao salvar o e-mail. Por favor, tente novamente mais tarde.');
            }
        } else {
            bot.sendMessage(chatId, `Olá ${nomeUsuario}! Fora do horário comercial. O horário de funcionamento é de 09:00 às 18:00. Por favor, informe seu e-mail para que possamos entrar em contato.`);
        }
    }
});
