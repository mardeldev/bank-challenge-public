class Client {
    #name;
    #account;
    #transaction;

    constructor(name, account) {
        this.#name = name;
        this.#account = account;
      }

    newTransaction(Transaction, id, transactionType, amount, transactionDate){
        this.#transaction = new Transaction(id, transactionType, amount, transactionDate);
        this.addTransactionToAccount(this.#transaction);
    }
  
    addTransactionToAccount(){
        this.#account.addTransactionToAccount(this.#transaction);
    }

    getBalance(){
        return this.#account.getBalance();
    }

}

export default Client;