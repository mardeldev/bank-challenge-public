# README.md

# Bank Challenge

---

```
	
	   ^^                   ^^ 
	   ||                   ||
	/'''''''''''''''''''''''''''\
   /                             \
  / _____________________________ \
 /                                 \
|__________  []  [] [] [] __________|
|[] [] []   ______________  [] [] []|
|			BANK OF MARDEL          |
|[]_[]_[]                   []_[]_[]|
---------        / \        ---------
---------       /___\       ---------
|||----||       ,---,       ||----|||
|||----||       |  .|       ||----|||
|||----||_______|___|_______||----|||
```

The source code found in this repository has been written in Javascript and was built to meet the requirements outlined in the prerequisites below.

---

# About the Bank Challenge

---

The Bank challenge is the second part of a series of challenges set by Digital Futures to test my working knowledge on the concepts learned so far on the Digital Futures Academy. In preparation for this challenge, some of the concepts learned include: Software Development Lifecycles, Test Driven Development, Testing Frameworks, Domain Modelling and Object Oriented Design & Testing.

# Built with

---

The code that forms the solution for this challenge was written in Javascript, and tested using the Jasmine testing framework and custom spec files written myself, to satisfy the user stories provided..

# Getting Started

---

## Prerequisites:

- [Node.js](https://nodejs.org/en/download)
    - Or install using [Homebrew](https://formulae.brew.sh/formula/node)
- [npmjs](https://www.npmjs.com/)
- [Jasmine](https://jasmine.github.io/)

## Installation:

- Clone the repository

`git clone https://github.com/mardeldev/bank-challenge.git`

- Enter directory

`cd bank-challenge`

- Setup Jasmine testing framework. Set entry point to `index.js` and the test command to `jamsmine` when prompted. Then open `package.json` and add a new key:value pair of `type : "module"`.

`npm init
npm i --save-dev jasmine
npx jasmine init`

- Enter the `src` directory

`cd src/`

- Run `index.js` from the terminal

`node index.js`

- To run the tests, run `npm test` from the terminal

## Project Structure:

- The index file and classes are found in the `src` directory.
- Spec/test files are found in the `spec` directory.

# Problem Statements

---

### Requirements

- Results of your code should display via the JavaScript console. (NB: You don't need to implement a command line interface that takes user input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, credit or debit amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012

**And** a deposit of 2000 on 13-01-2012

**And** a withdrawal of 500 on 14-01-2012

**When** she prints her bank statement

**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

Credited values should be GREEN and debited values should be RED. The balance should be GREEN if positive and RED if negative 

---

# User Stories

`As a bank manager,
So that they can bank,
I want my clients to be able to add money to their bank account and withdraw money from their bank account.`

`As a client,
So that I can plan ahead,
I want to be able to see how much money is left in my bank account.`

`As a client,
So that I can manage my money better,
I want to be able to print a statement with a history of my transactions.`

`As a bank manager,
So that they do not go into overdraft,
I want to be able to prevent my clients from withdrawing money that is not in their account.`

`As a bank manager,
So that we keep their accounts functional,
I want to prevent my clients from depositing anything other than money.`

---

### User Story 1

`As a bank manager,
So that they can bank,
I want my clients to be able to add money to their bank account and withdraw money from their bank account.`

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Client | name @string | newTransaction(Transaction, id, transactionType, amount, date) | @Void |
|  |  | addTransactionToAccount(Transaction) | @Void |
|  |  |  |  |
| Account | transactionHistory @array [@Transaction] | addTransactionToAccount() | @Void |
|  | accountNumber @number |  |  |
|  | balance @number |  |  |
|  |  |  |  |
| Transaction | id @number |  |  |
|  | transactionType @string |  |  |
|  | amount @amount |  |  |
|  | transactionDate @string |  |  |
- **Test 1a**: Instantiate a new `Client(name, Account)` , call `Client.newTransaction(Transaction, id, transactionType, amount, date)`, expect `addTransactionToAccount()` (a `spy` for `Account.addTransactionToAccount()`) to have been called.
- **************Test 1b**************: Call `Client.newTransaction(Transaction)`, expect `Account.balance()`to be **more** than 0.
- **************Test 1c**************: Call `Client.newTransaction(Transaction)`, expect `Account.balance()`to be **less** than 0.

---

### User Story 2

`As a client,
So that I can plan ahead,
I want to be able to see how much money is left in my bank account.`

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Client | name @string | newTransaction(Transaction, id, transactionType, amount, date) | @Void |
|  |  | addTransactionToAccount(Transaction) | @Void |
|  |  | getBalance() | @Number |
|  |  |  |  |
| Account | transactionHistory @array [@Transaction] | addTransactionToAccount() | @Void |
|  | accountNumber @number | getBalance() | @Number |
|  | balance @number |  |  |
|  |  |  |  |
| Transaction | id @number |  |  |
|  | transactionType @string |  |  |
|  | amount @amount |  |  |
|  | transactionDate @string |  |  |
- ******************Test 2a:****************** Instantiate a new `Client(name, Account)` , call `Client.newTransaction(Transaction, "001", "**deposit**", 100, "01/01/01")`, ******************c******************all `Client.getBalance()`, expect `getBalance()` (a `spy` for `Account.getBalance()`) to have been called.
- ******************Test 2b******************: Call `Client.getBalance()`, expect `100` to be returned.

---

### User Story 3

`As a client,
So that I can manage my money better,
I want to be able to print a statement with a history of my transactions.`

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Client | name @string | newTransaction(Transaction, id, transactionType, amount, date) | @Void |
|  |  | addTransactionToAccount(Transaction) | @Void |
|  |  | getBalance() | @Number |
|  |  | printStatement() | @Void |
|  |  |  |  |
| Account | transactionHistory @array [@Transaction] | addTransactionToAccount() | @Void |
|  | accountNumber @number | getBalance() | @Number |
|  | balance @number | printStatement() | @String |
|  |  |  |  |
| Transaction | id @number |  |  |
|  | transactionType @string |  |  |
|  | amount @amount |  |  |
|  | transactionDate @string |  |  |
- ****************Test 3a:**************** Instantiate a new `Client(name, Account)` , call `Client.newTransaction(Transaction, "001", "**deposit**", 100, "01/01/01")`,
    
    call `Client.newTransaction(Transaction, "002", "**deposit**", 100, "02/01/01")`,
    
    call `Client.printStatement()`,
    
    expect `printStatement()` (a `spy` for `Account.printStatement()`) to have been called.
    
- **************Test 3b**************: Expect `Account.transactionHistory.length` to be 2.
- **************Test 3c**************: Call `Client.newTransaction(Transaction, "001", "**deposit**", 100, "01/01/01")`, expect `Account.transactionHistory[0]` to be instance of `Transaction`.

---

### User Story 4

`As a bank manager,
So that they do not go into overdraft,
I want to be able to prevent my clients from withdrawing money that is not in their account.`

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Client | name @string | newTransaction(Transaction, id, transactionType, amount, date) | @Void |
|  |  | addTransactionToAccount(Transaction) | @Void |
|  |  | getBalance() | @Number |
|  |  | printStatement() | @Void |
|  |  |  |  |
| Account | transactionHistory @array [@Transaction] | addTransactionToAccount() | @Void |
|  | accountNumber @number | getBalance() | @Number |
|  | balance @number | printStatement() | @String |
|  |  | checkBalance() | @Error |
|  |  |  | @Void |
|  |  |  |  |
| Transaction | id @number |  |  |
|  | transactionType @string |  |  |
|  | amount @amount |  |  |
|  | transactionDate @string |  |  |
- **********Test 4a**********: Instantiate a new `Client(name, Account)` , call `Client.newTransaction(Transaction, "001", "**withdraw**", 100, "01/01/01")`,
    - expect `checkBalance()` (a `spy` for `Account.checkBalance()` ) to be called.
    - expect an `error` to be thrown.

---

### User Story 5

`As a bank manager,
So that we keep their accounts functional,
I want to prevent my clients from depositing anything other than money.`

### Domain Model

| Objects | Properties | Messages | Output |
| --- | --- | --- | --- |
| Client | name @string | newTransaction(Transaction, id, transactionType, amount, date) | @Void |
|  |  | addTransactionToAccount(Transaction) | @Void |
|  |  | getBalance() | @Number |
|  |  | printStatement() | @Void |
|  |  |  |  |
| Account | transactionHistory @array [@Transaction] | addTransactionToAccount() | @Void |
|  | accountNumber @number | getBalance() | @Number |
|  | balance @number | printStatement() | @String |
|  |  | checkBalance() | @Error |
|  |  |  | @Void |
|  |  | checkMoney() | @Error |
|  |  |  | @Void |
|  |  |  |  |
| Transaction | id @number |  |  |
|  | transactionType @string |  |  |
|  | amount @amount |  |  |
|  | transactionDate @string |  |  |

**************Test 5a**************: Instantiate a new `Client(name, Account)` , call `Client.newTransaction(Transaction, "001", "withdraw", "**************bitcoin**************", "01/01/01")`,

- expect `checkMoney()` (a `spy` for `Account.checkMoney()` ) to be called.
- expect an `error` to be thrown.

---