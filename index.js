const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "/start") {
    bot.sendMessage(chatId, "Привет 💋 Я здесь, чтобы с тобой пообщаться...");
  } else {
    bot.sendMessage(chatId, "Ммм… расскажи мне больше 😏");
  }
});
