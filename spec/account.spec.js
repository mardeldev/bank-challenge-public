import Account from "../src/account.js";

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

    class mockClient {
    
        constructor(name, account){
            this.name = name;
            this.account = account;
        }
        newTransaction(Transaction, id, transactionType, amount, transactionDate){
            this.transaction = new Transaction(id, transactionType, amount, transactionDate);
            this.addTransactionToAccount(this.transaction);
        }
        addTransactionToAccount(){
            this.account.addTransactionToAccount(this.transaction);
        }

    }

    beforeEach(() => {
        testAccount = new Account();
        testClient = new mockClient(`Ble`, testAccount);
        
    })

    afterEach(() => {
        testAccount = undefined;
    })

    it('1b. should deposit money to the account.', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        // Act
        testClient.newTransaction(mockTransaction, '001', 'deposit', 100, '01/01/01');
        // Assert
        expect(testAccount.balance).toBe(100);
    })

    it('1c. should withdraw money from the account.', () => {
        // Arrange -> testAccount and testClient instantiation done in beforeEach.
        // Act
        testClient.newTransaction(mockTransaction, '001', 'deposit', 100, '01/01/01');
        testClient.newTransaction(mockTransaction, '001', 'withdraw', 100, '01/01/01');
        // Assert
        expect(testAccount.balance).toBe(0);
    })
})