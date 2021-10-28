const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot started.');
	client.user.setActivity('Bready to react')
});

client.on('message', message => {
	if (message.content = ' ') {
		try {
		message.react('🍞');
		console.log('Bread');
		} catch(e) {
			//Pass Error
		}
}
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login('token');
