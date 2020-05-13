const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', message => {
    client.user.setPresence({ game: { name: 'CSS animation' } });
    console.log('bot is ready!');
});

client.on('message', message => {
    if (message.isMemberMentioned(client.user)) {
        message.reply('呼んだ？呼んだよね？ねぇ？ねぇ？呼んだ？呼んだ？呼んだ？呼んだ？');
        return;
    }
});

client.on('message', message => {
    if (message.content === "CSS") {
        message.channel.send("崇めよ");
        return;
    }
});
client.on('message', message => {
    if (message.content === "チャイム") {
        message.channel.send("ｷｰﾝ↑ｺｰﾝ↓ｶｰﾝ→ｺｰﾝ↓");
        return;
    }
});
client.on('message', message => {
    if (message.content === "/UserAdd") {
        if (User.indexOf(message.member) == -1) {
            User.push(message.member)
            message.channel.send(message.member + 'を登録しました');
        }
        else {
            message.channel.send(message.member + 'は登録されているようです');
        }
        return;
    }
});
client.on('message', message => {
    if (message.content === "/UserDelete") {
        if (User.indexOf(message.member) >= 0) {
            var result = User.indexOf(message.member);
            User.splice(result, 1);
            message.channel.send(message.member + 'を削除しました');
        }
        else {
            message.channel.send(message.member + 'は登録されていないようです');
        }
        return;
    }
});
client.on('message', message => {
    if (message.content === "/UserList") {

        message.channel.send(User);
        return;
    }
});
client.on('message', message => {
    if (message.content === "/UserReset") {
        User = ["test"]
        return;
    }
});

client.login(config.token);