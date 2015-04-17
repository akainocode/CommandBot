// Initialization of the node module.

var TennuPluginName = {
    init: function (client, imports) {
        // Initialization of the plugin.

        return {
            exports: {
                // Exported properties.
            },

            handlers: {
                '!command': function (command) {
                    // Handle the command
                }
            },

            help: {
                'command': [
                    '!command &lt;command&gt;',
                    ' ',
                    'Help info about command.'
                ]
            },

            commands: ['command']
        };
    }
};

module.exports = TennuPluginName;