// Initialization of the node module.

var MathPlugin = {
    init: function (client, imports) {
        // Initialization of the plugin.

        return {
            exports: {
                // Exported properties.
            },

            handlers: {
                '!calculate': function (command) {
                    if(command.args.length == 0 || command.args.length > 1)
                        client.say(command.channel, "Make sure there is a calculation that has no spaces inside it.");
                    else{
                        var expression = command.args[0];
                        var parenthesis = {};
                        var addition = {};
                        var subtraction = {};
                        var multiplication = {};
                        var division = {};

                    }
                }
            },

            help: {
                'calculate': [
                    '!calculate',
                    ' ',
                    'Does some mathematics related thing.'
                ]
            },

            commands: ['calculate']
        };
    }
};

module.exports = MathPlugin;