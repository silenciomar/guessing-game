class GuessingGame {
    constructor() {};

    setRange(min, max) {
        this.min = min;
        this.max = max;
    };

    guess() {
        this.guessingNumber = Math.ceil((this.max + this.min) / 2);
        return this.guessingNumber;
    };

    lower() {
        this.max = this.guessingNumber;
    };

    greater() {
        this.min = this.guessingNumber;
    };
}

module.exports = GuessingGame;
