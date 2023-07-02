import Account from "./account.js";
import Client from "./client.js";
import Printer from "./printer.js";
import Transaction from "./transaction.js";

const testAccount = new Account();
const Ble = new Client("Ble", testAccount);
try {
Ble.newTransaction(Transaction, "deposit", 1000, (new Date (2012, 0, 10)));
Ble.newTransaction(Transaction, "deposit", 2000, (new Date (2012, 0, 13)));
Ble.newTransaction(Transaction, "withdraw", 500, (new Date (2012, 0, 14)));
Ble.printStatement(Printer);
} catch (error) {
    console.log(`An error has occured. Reason: ${error.message}`)
}
