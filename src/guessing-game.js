class GuessingGame {
    constructor() {
        this.great;
        this.low;
    };

    setRange(min, max) {
        this.low = min;
        this.great = max;
    };

    guess() {
        this.guessingNumber = Math.ceil((this.low + this.great) / 2);
        return this.guessingNumber;
    };

    lower() {
        this.great = this.guessingNumber;
    };

    greater() {
        this.low = this.guessingNumber;
    }
}

module.exports = GuessingGame;
