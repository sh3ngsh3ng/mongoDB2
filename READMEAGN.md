## To show all the databases on the server
```
show databases
```

## Navigate to database
```
use <name of database>
```
Example:
```
use sample_airbnb
```

## To check for current active database, show all collections:
```
show collections
```
db 
```
(db is a global variable defined by mongo client. always refer to current database)
```

## Queries
To find/retrieve all the documents of a collection:
```
db.<name of collection>.find()
```
For example, to get all the listings and reviews from the 
`listingsAndReviews` collection, we type in:
```
db.listingsAndReviews.find()
```
To beautify (i.e format) to the output, we put a .pretty()
```
db.listingsAndReviews.find().pretty()
```

## Projection
Display only certain keys from the document

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:
```
db.listingsAndReviews.find({}, {
    "name":1,
    "address":1
}).pretty()
```

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.
How to project by a field inside a nested object
```
db.listingsAndReviews.find({},{
    'name':1,
    'address.country':1,
    'beds':1
}).pretty()

## Limit
Show only the first five results:
**So….?**
```
db.listingsAndReviews.find({},{
    "name":1,
    "address.country":1,
    "beds":1
}).pretty().limit(5)
```

## Filtering
Specify critera in the first argument of `find`
Find all documents where a specific key has a specific value.
Example: find all the listings that has exactly 2 beds
```
db.listingsAndReviews.find({
    "beds":2
},{
    'name':1,
    'beds':1
}).pretty()
```
Searching by multiple criteria -- find all the listings that has 2 beds and 2 bedrooms
```
db.listingsAndReviews.find({
    'beds':2,
    'bedrooms':2
}, {
    'name':1,
    'beds':1,
    'bedrooms':1
})