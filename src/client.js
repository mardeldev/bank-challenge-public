class Client {
    constructor(name, account) {
        this.name = name;
        this.account = account;
      }

    newTransaction(Transaction, id, transactionType, amount, transactionDate){
        this.transaction = new Transaction(id, transactionType, amount, transactionDate);
        this.addTransactionToAccount();
    }
  
    addTransactionToAccount(){
        this.account.addTransactionToAccount(this.transaction);
    }
}

export default Client;