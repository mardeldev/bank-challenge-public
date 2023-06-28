class Transaction{
    constructor(id, transactionType, amount, transactionDate){
        this.id = id;
        this.transactionType = transactionType;
        this.amount = amount;
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        this.transactionDate = transactionDate.toLocaleDateString('en-GB', options);
    }
}

export default Transaction;