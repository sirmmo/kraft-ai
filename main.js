var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  host: "localhost", // optional
  port: 25565,       // optional
  username: "email@example.com", // email and password are required only for
  password: "12345678",          // online-mode=true servers
});
bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  bot.chat(message);
});
