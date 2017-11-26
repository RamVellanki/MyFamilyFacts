const factHandler = require('./factHandler').factHandler;
const facts = require('./facts').facts;
const mapping = require('./facts').mapping;

const handlers = {
    'HelloWorldIntent': function () {
      this.emit(':tell', 'Hello Wordld');
    },
    'LaunchRequest': function(){
        this.emit(':tell', 'Hello Abhiram');
    },
    'GetFactAbout': function(){
        if(this.event.request.intent.slots.name.value){
            var name = this.event.request.intent.slots.name.value.toLowerCase()
            console.log(name);
            var mappedName = mapping[name];
            console.log(mappedName);
            this.emit(':tell',factHandler(mappedName));
        } else {
            this.emit(':tell','I can only tell facts about Abhiram and Ananya');
        }
    }
  };

module.exports = { handlers };
