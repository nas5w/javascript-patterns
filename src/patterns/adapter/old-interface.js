class OldInterface {
    constructor() {
        this.request = (text, operation) => {
            if (operation == 'say') {
                return text;
            }
        }
    }
}

module.exports = OldInterface;