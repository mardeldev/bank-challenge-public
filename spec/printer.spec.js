import Printer from "../src/printer.js"
describe('User Story 3 Test:', () => {
    let testClient;
    let testAccount;
    let clgSpy;
    const stringToPrint = "date       || credit  || debit   || balance"
    class mockTransaction {
        constructor(id, transactionType, amount, transactionDate){
            this.id = id;
            this.transactionType = transactionType;
            this.amount = amount;
            this.transactionDate = transactionDate;
        }
    }

    class mockClient {
    
        constructor(name, account){
            this.name = name;
            this.account = account;
        }
        newTransaction(Transaction, id, transactionType, amount, transactionDate){
            this.transaction = new Transaction(id, transactionType, amount, transactionDate);
            this.addTransactionToAccount(this.transaction);
        }
        addTransactionToAccount(){ this.account.addTransactionToAccount(this.transaction); };

        printStatement(Printer){ Printer.printStatement(this.account) };
    
    }

    class mockAccount {
        transactionHistory = [];
        accountNumber = 1;
        balance = 0;
        addTransactionToAccount(transactionToAdd){}
    }

    beforeEach(() => {
        testAccount = new mockAccount();
        testClient = new mockClient(`Ble`, testAccount);
        clgSpy = spyOn(console, "log");
        
    })

    afterEach(() => {
        testAccount = undefined;
    })

    it('3b. should call on console log', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        testClient.newTransaction(mockTransaction, '001', 'deposit', 100, '01/01/01');
        // Act
        testClient.printStatement(Printer);
        // Assert
        expect(clgSpy).toHaveBeenCalled();
    })
    it('3c. should call on console log with the expected output', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        testClient.newTransaction(mockTransaction, '001', 'deposit', 1000, (new Date (2012, 0, 10)));
        // Act
        testClient.printStatement(Printer);
        // Assert
        expect(clgSpy).toHaveBeenCalledWith(stringToPrint);
    })

})