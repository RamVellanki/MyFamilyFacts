const facts = require('./facts').facts;

var factHandler = function (name) {
    console.log(name);
    if(name === 'abhiram'){
        name = 'abhi';
    }
    var fact = "Sorry, I couldn't find that name";
    if (name != undefined) {
        var fact = name + " likes " + facts[name].likes + '<break time="500ms"/>';
        fact = fact + name + ', birthday is on ' + facts[name].birthday + '<break time="500ms"/>';
        fact = fact + name + ', interested in ' + facts[name].interested + '<break time="500ms"/>';
        fact = fact + name + ', bestfriend is ' + facts[name].bestfriend;
    }
    return fact;
};

module.exports = { factHandler };