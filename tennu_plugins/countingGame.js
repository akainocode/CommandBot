// Initialization of the node module.

var countingGame = {
    init: function (client, imports) {
        var counter = 0;
        var stop = 1000;
        var limit = 10;
        return {
            handlers: {
                '!count': function (command) {
                    var roll = 0;
                    if(stop - counter < limit){
                        roll = round(random() * round(stop - counter)) + 1
                    }
                    else{
                        roll = round(random() * 10) + 1
                    }
                    counter = counter + roll;
                    client.act(command.channel, roll + " was rolled by " + command.nickname +", and the counter is at " + counter);
                    if(counter == stop){
                        client.act(command.channel, "Congratulations, " + command.nickname + " has completed the counter up to " + counter + "!");
                        counter = 0;
                    }
                 }
            },

            help: {
                'command': [
                    '!counter',
                    ' ',
                    'A small counting game in which you try to hit the limit.'
                ]
            },

            commands: ['countingGame']
        };
    }
};

module.exports = countingGamePlugin;