// Initialization of the node module.
var random = Math.random;
var round = Math.round;
const function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
const function isNums(str){
    return int(str.replace(/[0-9]/g, "").length) == 0;
}
var countingGame = {
    init: function (client, imports) {
        var counter = 0;
        var stop = 10;
        var limit = 10;
        var[] adminUsers = {
            "akainocode",
            "Havvy",
            "Nyanta",
            "TsundereVanilla"
            //More can be added later
        }
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
                    client.say(command.channel, roll + " was rolled by " + command.nickname +", and the counter is at " + counter);
                    if(counter == stop){
                        client.say(command.channel, "Congratulations, " + command.nickname + " has completed the counter up to " + counter + "!");
                        counter = 0;
                    }
                 }
                '!setEnd': function(command) {
                    if(contains(adminUsers, command.nickname)){
                        var[] params = command.args;
                        if(params.length < 1)
                            client.say("Invalid command: Not enough parameters")
                        else{
                            if(isNums(params[0])){
                                stop = int(params[0]);
                                client.say("Limit for the counting game is is successfully set to " + params[0]);
                            }

                        }
                    }
                    else{
                        client.say("Insufficient Permissions");
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

module.exports = countingGame;