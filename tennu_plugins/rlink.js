//WILL FINISH TODAY
var RedditLinker = {
    init: function (client, imports) {
        // Initialization of the plugin.

        return {

            handlers: {
                '!rlink': function (command) {
                    var link = command.args;
                    if(link.length <= 0)
                        client.say(command.channel, "Error: Not enough arguments");
                    else{
                        var toLink = link[0];
                        if(toLink.substring(0, 2) == "r/")
                            client.say(command.channel, command.nickname + " requested a link to the subreddit www.reddit.com/" + toLink);
                    }
                }
            },

            help: {
                'command': [
                    '!rlink',
                    ' ',
                    'This link is going .'
                ]
            },

            commands: ['rlink']
        };
    }
};

module.exports = RedditLinker;
