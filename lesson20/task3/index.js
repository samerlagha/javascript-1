export class Wallet {
    balance = 0;

    getBalance() {
        return this.balance;
    }

    deposit(value) {
        this.balance += value;
    }

    withdraw(value) {
        if (this.balance < value) {
            console.log('No enough funds');
        }
        this.balance -= value;
    }
};