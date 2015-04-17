// Initialization of the node module.

var Utilities = {
    init: function (client, imports) {
        // Initialization of the plugin.
        var owner = "akainocode"
        return {
            handlers: {
                '!join': function (command) {
                    if(command.nickname == owner)
                        if(command.args.length == 0)
                            client.say(command.channel, "Error: No Channel to join");
                        else
                            for(x in command.args){
                                if(x.contains("#"))
                                    client.raw("/join " + x);
                                else
                                    client.say("Error: Can't join " + x + " since there is no '#'");
                            }
                    else
                        client.say(command.channel, "Error: Not bot owner");
                }
            },

            help: {
                'join': [
                    '!join &lt;command&gt;',
                    ' ',
                    'Allows bot owner to join the .'
                ]
            },

            commands: ['join']
        };
    }
};

module.exports = Utilities;