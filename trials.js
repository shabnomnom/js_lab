/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

"use strict";
// Add function to prnt profile info
function showProfile(name, catchphrase, location){
	console.log('PROFILE:');
	console.log(`Name: ${name}`);
	console.log(`Catchphrase: ${catchphrase}`);
	console.log(`Location: ${location}`);

}
	


/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

// Add function to print interests
function showLikes(likes){
	console.log('THINGS I LIKE:');
	for (let thing of likes){
		console.log(thing);
	}
}


/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
  // Add more favorites
  'food':'pebbles',
  'tree':'palm',
  'quote':'Bock bock bock'
};

// Add function to print favorites
function showFavorites(favorites){
	console.log('FAVORITES:');
	for (let key of Object.keys(favorites)){
		console.log(`${key}: ${favorites[key]}`);
	}
}


/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Object of transactions
var transactions = {};

// Add a transaction to a collection of current transactions
function addTransaction(date, amount, currentTransactions){
	currentTransactions[date] = amount;
	return currentTransactions;
}



/////////////////////////////////////////////////////////
// Get Balance Status

// Return an account holder's current balance status
function getBalanceStatus(balance){
	if (balance < 0){
		return('YOU ARE OVERDRAWN');
	} else if (balance < 20){
		return('Warning! Your balance is almost 0!');
	} else {
		return('Normal');
	}
}


/////////////////////////////////////////////////////////
// Calculate Current Balance

// Calculate and return current balance
function getCurrentBalance(balance, transactions){
	let currentBalance = balance;
	for (let date of Object.keys(transactions)){
		let bal = transactions[date];
		if (currentBalance < 0){
			currentBalance = currentBalance + bal - 25;
		} else {
		currentBalance = currentBalance + bal;
		}
	}
	return currentBalance;
}

/////////////////////////////////////////////////////////
// Show Account Activity

// Print account holder's transaction history, current balance, and balance status
function showAcctActivity(currentBalance, transactionHistory){
	
	// list all transactions
	console.log('TRANSACTIONS:');
	for (let each of Object.keys(transactionHistory)){
		console.log(`${each}:${transactionHistory[each]}`);
	}
	
	// get current balance
	console.log('CURRENT BALANCE:');
	console.log(getCurrentBalance(currentBalance,transactionHistory));

	// get current status
	console.log('CURRENT STATUS:');
	console.log(getBalanceStatus(currentBalance))


}


/////////////////////////////////////////////////////////
// Creating a User Object

const user = { 
	name : 'name',
	catchphrase : 'catchphrase',
	location : 'location',
	interests : 'interests',
	favorites : 'favorites',
	transactions : 'transactions',
	startingBalance : 'startingBalance'
};

// Add user object

// Add function to print user dashboard



/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members



/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours

