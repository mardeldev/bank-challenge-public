class Transaction{
    idHistory = [];
    constructor(transactionType, amount, transactionDate){
        this.id = Transaction.transactionIdGenerator;
        this.transactionType = transactionType;
        this.amount = amount;
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        this.transactionDate = transactionDate.toLocaleDateString('en-GB', options);
    }

    static transactionIdGenerator(){
        while(!idHistory.includes(newId)){
            newId = Math.floor(Math.random() * 10000) + 1000;
            idHistory.push(newId)
        }
    }
        
}

export default Transaction;