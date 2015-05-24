// Initialization of the node module.

var Tester = {
    init: function (client, imports) {
        // Initialization of the plugin.

        return {
            exports: {
                // Exported properties.
            },

            handlers: {
                '!channel': function (command) {
                    client.say(command.channel, "You are " + command.nickname + " in " + command.channel);
                }
            },

            help: {
                'command': [
                    '!command &lt;command&gt;',
                    ' ',
                    'Help info about command.'
                ]
            },

            commands: ['channel']
        };
    }
};

module.exports = Tester;