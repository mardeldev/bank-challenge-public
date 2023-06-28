class Printer {
    static transactionHistory = [];
    static green = '\x1b[32m';
    static red = '\x1b[31m';
    static reset = '\x1b[0m';
    static space = '';
    static maxPadEnd = 8;
    
    static printStatement(account) {
        this.transactionHistory = account.transactionHistory;
        this.printHeader();
        this.printTransactions();
    }

    static printHeader() {
        let header = { date: 'date', credit: ' credit', debit: ' debit', balance: ' balance' };
        console.log(`${header.date.padEnd(11, ' ')}||${header.credit.padEnd(Printer.maxPadEnd + 1, ' ')}||${header.debit.padEnd(Printer.maxPadEnd + 1, ' ')}||${header.balance}`);
    }

    static printTransactions() {
        for (let i = this.transactionHistory.length - 1; i >= 0; i -= 1) {
            let transaction = this.transactionHistory[i];
            this.printTransaction(transaction);
        }
    }

    static printTransaction(transaction) {
        let date = String(transaction.Transaction.transactionDate);
        let transactionType = transaction.Transaction.transactionType;
        let transactionAmount = parseInt(transaction.Transaction.amount).toFixed(2);
        let balance = parseInt(transaction.Balance).toFixed(2);
        let credit = this.formatCredit(transactionType, transactionAmount);
        let debit = this.formatDebit(transactionType, transactionAmount);
        balance = this.formatBalance(balance);
        console.log(`${date.padEnd(11, ' ')}|| ${credit}|| ${debit}|| ${balance}`);
    }

    static formatCredit(transactionType, transactionAmount) {
        return transactionType === 'deposit' ? Printer.green + transactionAmount.padEnd(Printer.maxPadEnd, ' ') + Printer.reset : Printer.space.padEnd(Printer.maxPadEnd, ' ');
    }

    static formatDebit(transactionType, transactionAmount) {
        return transactionType === 'withdraw' ? Printer.red + transactionAmount.padEnd(Printer.maxPadEnd, ' ') + Printer.reset : Printer.space.padEnd(Printer.maxPadEnd, ' ');
    }

    static formatBalance(balance) {
        return balance < 0 ? Printer.red + String(balance) + Printer.reset : Printer.green + String(balance) + Printer.reset;
    }
}
}

export default Printer;