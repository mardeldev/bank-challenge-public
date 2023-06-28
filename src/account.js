class Account {
    withdrawalError = new Error('You do not have the sufficient funds to complete this transaction.');
    moneyError = new Error('You can only deposit money into your account.');

    accountNumber;
    balance = 0;
    transactionHistory = [];


    addTransactionToAccount(transactionToAdd){
        this.checkBalance(transactionToAdd);
        this.updateBalance(transactionToAdd);
        this.updateTransactionHistory(transactionToAdd);
        
    }

    checkBalance(transactionToAdd){
        
    }

    updateBalance(transactionToAdd){
        transactionToAdd.transactionType === 'deposit' ?  this.balance += parseInt(transactionToAdd.amount)
        : transactionToAdd.transactionType === 'withdraw' ? this.balance -= parseInt(transactionToAdd.amount) : () => {};
    }

    getBalance(){
        return this.balance;
    }
    
    updateTransactionHistory(transactionToAdd){
        this.transactionHistory.push({Transaction : transactionToAdd, Balance : this.balance});
     }

}

export default Account;