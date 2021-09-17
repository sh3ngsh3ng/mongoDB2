// Question 1 //
// 2a. founded in year 2006
db.companies.find({
    'founded_year': 2006
}, {
    'name': 1,
    'founded_year': 1
})

// 2b. founded after year 2006
db.companies.find({
    'founded_year': {
        '$gt': 2006
    }
}, {
    'name': 1,
    'founded_year': 1
})

// 2c. founded between 1900 and 2010
db.companies.find({
    'founded_year': {
        '$gt': 1900,
        '$lt': 2010
    }
}, {
    'name':1,
    'founded_year':1
})

// 3a. valuation of more than 100 million
db.companies.find({
    'acquisition.price_amount': {
        '$gt': 100 * 10**6
    }
}, {
    'name': 1,
    'acquisition.price_amount': 1
})

// 3b. valuation of more than 100 million AND in USD currency
db.companies.find({
    'acquisition.price_amount': {
        '$gt': 100 * 10**6
    },
    'acquisition.price_currency_code': 'USD'
}, {
    'name': 1,
    'acquisition.price_amount': 1,
    'acquisition.price_currency_code':1
})



// Question 2
// 1. Find all businesses which has violations issued
db.inspections.find({
    'result': 'Violation Issued'
}, {
    'business_name': 1,
    'result': 1
})

// 2. Find all business which has violations, and are in the city of New York.
db.inspections.find({
    'result': 'Violation Issued',
    'address.city': 'NEW YORK'
}, {
    'business_name': 1,
    'result': 1,
    'address.city': 1
})

// 3. Count how many businesses there in the city of New York
db.inspections.count({
    'address.city': "NEW YORK"
})

db.inspections.find({
    'address.city': "NEW YORK"
}, {
    'address.city': 1
})

// 4. Count how many businesses there are in the city of Ridgewood 
// and does not have violations (hint: google for "not equal" in Mongo)
db.inspections.count({
    'address.city': "RIDGEWOOD",
    'result': {
        '$ne': 'Violation Issued'
    }
})

db.inspections.find({
    'address.city': "RIDGEWOOD",
    'result': {
        '$ne': 'Violation Issued'
    }
}, {
    'address.city': 1,
    'result': 1
})







// Question 3
// 1. Find all accounts that have the Investment stock portfolio
db.accounts.find({
    'products': 'InvestmentStock'
}, {
    'name':1,
    'products':1
})

// 2. Find all accounts that have both the Commodity and InvestmentStock product
db.accounts.find({
    'products': {
        '$all': ['InvestmentStock', 'Commodity']
    }
}, {
    'name':1,
    'products':1
})

// 3. Find all accounts that have either Commodity OR CurrencyService product
db.accounts.find({
    'products': {
        '$in': ['Commodity', 'CurrencyService']
    }
}, {
    'name':1,
    'products':1
})


// 4. Find all accounts that does not have CurrencyService product
db.accounts.find({
    'products': {
        '$nin': ['CurrencyService']
    }
}, {
    'name':1,
    'products': 1
})

// 5. Find all products have a limit of more than 1000, and offer both InvestmentStock and InvestmentFund products
db.accounts.find({
    'products': {
        '$all': ['InvestmentStock', 'InvestmentFund'],
    },
    'limit': {
        '$gt': 1000
    }
}, {
    'name':1,
    'limit': 1,
    'products':1
})
