import Client from "../src/client.js";

describe('User Story 1 Test:', () => {
    let testClient;
    const mockTransaction = {
        id : '001',
        transactionType : 'deposit',
        amount : 100,
        transactionDate : '01/01/01',
    }
    const mockAccount = {
        transactionHistory : [],
        accountNumber : 1,
        balance : 0,
    }

    beforeEach(() => {
        testClient = new Client(`Ble`, mockAccount);
    })

    afterEach(() => {
        testClient = undefined;
    })

    it('1a. should call the Account addTransactionToAccount() method.', () => {
        // Arrange
        const mockAccountSpy = spyOn(mockAccount, 'addTransactionToAccount');

        // Act
        Ble.newTransaction(mockTransaction)
        // Assert
        expect(mockAccountSpy).toHaveBeenCalled();
    })
})