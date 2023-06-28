class Account {
    withdrawalError = new Error('You do not have the sufficient funds to complete this transaction.');
    moneyError = new Error('You can only deposit money into your account.');

    accountNumber;
    balance = 0;
    transactionHistory = [];


    addTransactionToAccount(transactionToAdd){
        this.updateBalance(transactionToAdd);
        this.transactionHistory.push({Transaction : transactionToAdd, Balance : this.balance});
    }

    updateBalance(transactionToAdd){
        transactionToAdd.transactionType === 'deposit' ?  this.balance += parseInt(transactionToAdd.amount) : () => {};
    }
      

}

export default Account;