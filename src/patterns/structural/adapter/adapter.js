const NewInterface = require('./new-interface');

class Adapter {
    constructor() {
        const newInterface = new NewInterface();
        this.request = (text, operation) => {
            if (operation == 'say') {
                return newInterface.say(text);
            }
        }
    }
}

module.exports = Adapter;