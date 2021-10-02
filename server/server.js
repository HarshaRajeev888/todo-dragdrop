const  MongoClient = require('mongodb').MongoClient
 
const url = "mongodb://localhost:27017"
client = new MongoClient(url)


async function run(){
    try{
        await client.connect()
        const database = client.db('fruits')
        const collection = database.collection('todolist')


        const query = {name:"Good Morning"}
        const query1 = {name:"Good Afternoon"}
        const query2 = {name:"Good Evening"}
        const query3 = {name:"Good Night"}
        const user = await collection.findOne(query)
        const user1 = await collection.findOne(query1)
        const user2 = await collection.findOne(query2)
        const user3 = await collection.findOne(query3)
        console.log(user)
        console.log(user1)
        console.log(user2)
        console.log(user3)




    }
    catch(error){
        console.log(Error)

    }
    finally{
        await client.close()
    }
}
run()
