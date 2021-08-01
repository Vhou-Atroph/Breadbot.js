const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot started.');
	client.user.setActivity('Bready to react')
});

client.on('message', message => {
	if (message.content = ' ') {
	message.react('🍞');
	console.log('Bread');
}
});

client.login('token');