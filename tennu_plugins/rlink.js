var RedditLinker = {
    init: function (client, imports) {
        return {
            handlers: {
                '!rlink': function (command) {
                    var link = command.args;
                    if(link.length <= 0)
                        client.say(command.channel, "Error: Not enough arguments");
                    else{
                        var toLink = link[0];
                        if(toLink.substring(0, 2) == "r/")
                            client.say(command.channel, command.nickname + " requested a link to the subreddit http://www.reddit.com/" + toLink);
                        else if(toLink.substring(0, 2) == "u/")
                            client.say(command.channel, command.nickname + " requested a link to the user http://www.reddit.com/" + toLink);
                        else
                            client.say(command.channel, "Error: Invalid user or subreddit");
                    }
                }
            },

            help: {
                'command': [
                    '!rlink',
                    ' ',
                    'Links a thing to reddit url.'
                ]
            },

            commands: ['rlink']
        };
    }
};

module.exports = RedditLinker;
