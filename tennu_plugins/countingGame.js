// Initialization of the node module.
var random = Math.random;
var round = Math.round;
// function contains(a, obj) {
//     var i = a.length;
//     while (i--) {
//        if (a[i] === obj) {
//            return true;
//        }
//     }
//     return false;
// }
// const function isNums(str){
//     return int(str.replace(/[0-9]/g, "").length) == 0;
// }
var countingGame = {
    init: function (client, imports) {
        var counter = 0;
        var stop = 10;
        var limit = 10;
        var adminUsers = [
            "akainocode",
            "Havvy",
            "Nyanta",
            "TsundereVanilla"
            //More can be added later
        ];
        function contains(a, obj) {
           var i = a.length;
             while (i--) {
               if (a[i] === obj) {
                   return true;
                }
            }
            return false;
        };
        function isNums(str){
           return int(str.replace(/[0-9]/g, "").length) == 0;
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
                    if(counter = stop - 1){
                        client.say(command.channel, "HA. ALL OF YOU GUYS LOSE. THANK " + command.nickname + " FOR IT.");
                    }
                    else if(counter <= stop){
                        client.say(command.channel, "Congratulations, " + command.nickname + " has completed the counter up to " + counter + "!");
                        counter = 0;
                    }
                 },
                '!setEnd': function(command) {
                   
                    if(contains(adminUsers, command.nickname)){
                        var params = command.args;
                        if(params.length < 1)
                            client.say(command.channel, "Invalid parameter: Not enough parameters");
                        else{
                            if(isNums(params[0])){
                                stop = int(params[0]);
                                client.say(command.channel, "Limit for the counting game is is successfully set to " + params[0]);
                            }
                            else{
                                client.say(command.channel, "Invalid parameter: Parameter is not a number.")
                            }

                        }
                    }
                    else{
                        client.say(command.channel, "Insufficient Permissions");
                    } 
                }
             },

            help: {
                'command': [
                    '!count',
                    ' ',
                    'A small counting game in which you try to hit the limit.',
                    '!setEnd',
                    ' ',
                    'A command intended to set the end of the counting game, only certain people can do this command.'
                ]

            },

            commands: ['count', 'setEnd']
        };
    }
};

module.exports = countingGame;