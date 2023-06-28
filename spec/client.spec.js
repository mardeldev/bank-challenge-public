import Client from "../src/client.js";

//////////////////////////////////////////////////////////////////////////////

describe('User Story 1 Test:', () => {
    let testClient;
    let testAccount;
    class mockTransaction {
        constructor(id, transactionType, amount, transactionDate){
            this.id = id;
            this.transactionType = transactionType;
            this.amount = amount;
            this.transactionDate = transactionDate;
        }
    }
    class mockAccount {
        transactionHistory = [];
        accountNumber = 1;
        balance = 0;
        addTransactionToAccount(transactionToAdd){}
    }

    beforeEach(() => {
        testAccount = new mockAccount();
        testClient = new Client(`Ble`, testAccount);
    })

    afterEach(() => {
        testClient = undefined;
    })

    it('1a. should call the Account addTransactionToAccount() method.', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        const mockAccountSpy = spyOn(testAccount, 'addTransactionToAccount');
        // Act
        testClient.newTransaction(mockTransaction, '001', 'deposit', 100, '01/01/01');
        // Assert
        expect(mockAccountSpy).toHaveBeenCalled();
    })

})

//////////////////////////////////////////////////////////////////////////////

describe('User Story 2 Test:', () => {
    let testClient;
    let testAccount;
    class mockTransaction {
        constructor(id, transactionType, amount, transactionDate){
            this.id = id;
            this.transactionType = transactionType;
            this.amount = amount;
            this.transactionDate = transactionDate;
        }
    }
    class mockAccount {
        transactionHistory = [];
        accountNumber = 1;
        balance = 0;

        addTransactionToAccount(transactionToAdd){}
        getBalance(){}
    }

    beforeEach(() => {
        testAccount = new mockAccount();
        testClient = new Client(`Ble`, testAccount);
    })

    afterEach(() => {
        testClient = undefined;
    })

    it('2a. should call the Account getBalance() method.', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        const mockAccountSpy = spyOn(testAccount, 'getBalance');
        // Act
        testClient.getBalance();
        // Assert
        expect(mockAccountSpy).toHaveBeenCalled();
    })

})

//////////////////////////////////////////////////////////////////////////////

describe('User Story 3 Test:', () => {
    let testClient;
    let testAccount;

    class mockAccount {
        transactionHistory = [];
        accountNumber = 1;
        balance = 0;

        addTransactionToAccount(transactionToAdd){}
        getBalance(){}
    }

    class mockPrinter {
       static printStatement(){}
    }

    beforeEach(() => {
        testAccount = new mockAccount();
        testClient = new Client(`Ble`, testAccount);
    })

    afterEach(() => {
        testClient = undefined;
    })

    it('3a. should call the Printer printStatement() method.', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        const mockPrinterSpy = spyOn(mockPrinter, 'printStatement');
        // Act
        testClient.printStatement(mockPrinter);
        // Assert
        expect(mockPrinterSpy).toHaveBeenCalled();
    })

})