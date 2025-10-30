import { MongoClient } from "mongodb"

const url = "mongodb://rajdeepbonga_db_user:rajdeep@ac-io7ctr8-shard-00-00.pnyqb0n.mongodb.net:27017,ac-io7ctr8-shard-00-01.pnyqb0n.mongodb.net:27017,ac-io7ctr8-shard-00-02.pnyqb0n.mongodb.net:27017/?replicaSet=atlas-3bpnty-shard-0&ssl=true&authSource=admin"
const dbname ='mernproject'
export const collectionname ='todo'
const client = new MongoClient(url)
 export const connectdb= async()=>{
    const connection= await client.connect()
    return await connection.db(dbname)


}
