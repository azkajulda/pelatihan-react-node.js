// const mongodb = require("mongodb")
const {MongoClient, ObjectID} = require("mongodb")
// const MongoClient = mongodb.MongoClient
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = 'task-manager'
MongoClient.connect(connectionURL,
    {useNewUrlParser : true},
    (error, client) => {
        if (error){
            return console.log('unable to connect')
        }

        const db = client.db(databaseName)
        // Mulai bermain dengan database

        // Insert One
        // db.collection('users').insertOne({
        //     name: 'azka',
        //     age: 20
        // }, (error, result) =>{
        //     if(error){
        //         return console.log("Terjadi kesalahan")
        //     }
        //     console.log(result.ops)
        //     console.log(result.insertedCount)
        //     console.log(result.insertedId)
        // }
        // )

        // Insert Many
        // db.collection('users').insertMany([
        //     {
        //         name: 'azka',
        //         age: 20
        //     },
        //     {
        //         name: 'Julda',
        //         age: 19
        //     }
        // ], (error, result) =>{
        //     if(error){
        //         return console.log("Terjadi kesalahan")
        //     }
        //     console.log(result.ops)
        //     console.log(result.insertedCount)
        //     console.log(result.insertedId)
        //     }
        // )

        // Find One
        // db.collection('users').findOne({_id: new ObjectID('5de50ebed0c8fa0b94cee89e')}, (error, task) => {
        //     console.log(task)
        // })


        // Insert data
        // db.collection('task').insertMany([
        //     {description: 'makan',completed: true},
        //     {description: 'mandi',completed: false},
        //     {description: 'jalan',completed: true}
        // ], (error, result) =>{
        //     if(error){
        //         return console.log("Terjadi kesalahan")
        //     }
        //     console.log(result.ops)
        // })

        
        //Find with condition completed = true
        // db.collection('task').find({completed: true}).toArray((error,task) => {
        //     console.log(task)
        // })

        // Find with age >= 24
        // db.collection('users').find({age: {$gte: 20}}).toArray((error,task) => {
        //     console.log(task)
        // })

        
    }

)
