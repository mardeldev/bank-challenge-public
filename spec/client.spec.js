import Client from "../src/client.js";

describe('User Story 1 Test:', () => {
    let testClient;
    let testAccount;
    class mockTransaction {
        id = '001';
        transactionType = 'deposit';
        amount = 100;
        transactionDate = '01/01/01';
    }
    class mockAccount {
        
        transactionHistory = [];
        accountNumber = 1;
        balance = 0;

        addTransactionToAccount(transactionToAdd){
            this.transactionHistory.push({Transaction : transactionToAdd, Balance : this.balance});
        }
    }

    beforeEach(() => {
        testAccount = new mockAccount();
        testClient = new Client(`Ble`, testAccount);
    })

    afterEach(() => {
        testClient = undefined;
    })

    it('1a. should call the Account addTransactionToAccount() method.', () => {
        // Arrange -> testAccount and testClient done in beforeEach.
        const mockAccountSpy = spyOn(testAccount, 'addTransactionToAccount');
        // Act
        testClient.newTransaction(mockTransaction);
        // Assert
        expect(mockAccountSpy).toHaveBeenCalled();
    })
})