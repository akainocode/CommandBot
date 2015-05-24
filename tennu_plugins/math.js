// Initialization of the node module.

var MathPlugin = {
    init: function (client, imports) {
        // Initialization of the plugin.
        function gcf(a, b){
            return a==0?b:gcf(b%a, a);
        }
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
                },
                '!gcf' : function(command){
                    if(command.args.length <= 1)
                        client.say(command.channel, "Error: Needs integer arguments");
                    var temp =command.args;
                    for(int w = 0; w < temp.length - 1; w++){
                        if(temp.length == 1)
                            break;
                        else{
                            temp[w] = gcf(temp[w], temp[w + 1]);
                            temp[w + 1] = 0;         w
                            
                        }
                        for(int x = temp.length - )
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