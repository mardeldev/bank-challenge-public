class Printer {
    static transactionHistory = [];
    static green = '\x1b[32m';
    static red = '\x1b[31m';
    static reset = '\x1b[0m';
    static space = '';
    static maxPadEnd = 7;
    
    static printStatement(account) {
        this.transactionHistory = account.transactionHistory;
        this.printHeader();
        this.printTransactions();
    }

    static printHeader() {
        let header = { date: 'date', credit: ' credit', debit: ' debit', balance: ' balance' };
        console.log(`${header.date.padEnd(11, ' ')}||${header.credit.padEnd(Printer.maxPadEnd + 2, ' ')}||${header.debit.padEnd(Printer.maxPadEnd + 1, ' ')}||${header.balance}`);
    }

    static formatCredit(transactionType, transactionAmount) {
        return transactionType === 'deposit' ? Printer.green + transactionAmount.padEnd(Printer.maxPadEnd + 1, ' ') + Printer.reset : Printer.space.padEnd(Printer.maxPadEnd + 1, ' ');
    }

    static formatDebit(transactionType, transactionAmount) {
        return transactionType === 'withdraw' ? Printer.red + transactionAmount.padEnd(Printer.maxPadEnd, ' ') + Printer.reset : Printer.space.padEnd(Printer.maxPadEnd, ' ');
    }

    static formatBalance(balance) {
        return balance < 0 ? Printer.red + String(balance) + Printer.reset : Printer.green + String(balance) + Printer.reset;
    }

    static printTransactions() {
        for (let i = this.transactionHistory.length - 1; i >= 0; i -= 1) {
            let transaction = this.transactionHistory[i];
            this.printTransaction(transaction);
        }
    }

    static printTransaction(transaction) {
        let date = String(transaction.Transaction.transactionDate), transactionType = transaction.Transaction.transactionType, transactionAmount = parseInt(transaction.Transaction.amount).toFixed(2), balance = parseInt(transaction.Balance).toFixed(2), credit = this.formatCredit(transactionType, transactionAmount), debit = this.formatDebit(transactionType, transactionAmount);
        balance = this.formatBalance(balance);
        console.log(`${date.padEnd(11, ' ')}|| ${credit}|| ${debit}|| ${balance}`);
    }
}


export default Printer;