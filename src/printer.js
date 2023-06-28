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
    }

    static printHeader() {
        let header = { date: 'date', credit: ' credit', debit: ' debit', balance: ' balance' };
        console.log(`${header.date.padEnd(11, ' ')}||${header.credit.padEnd(Printer.maxPadEnd + 1, ' ')}||${header.debit.padEnd(Printer.maxPadEnd + 1, ' ')}||${header.balance}`);
    }
}

export default Printer;