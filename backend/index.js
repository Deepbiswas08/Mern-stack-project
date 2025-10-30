import express from 'express';
import { connectdb } from './dbconfig.js';
import { collectionname } from './dbconfig.js';
import cors from 'cors';
import { ObjectId } from 'mongodb';
const app = express();


app.use(cors());
app.use(express.json());
app.get('/tasks',async  (req, res) => {

   const db = await connectdb();
        console.log("db connected");
        const collection = await db.collection(collectionname);
        const result = await collection.find().toArray();
        
        if(result){
            res.send({message: 'task fetched', success: true,result: result});

        }else{
            res.send({message: 'task  failed', success: false});        
        }
});

  app.post('/add-task', async (req, res) => {
        const db = await connectdb();
        console.log("db connected");
        const collection = await db.collection(collectionname);
        const result = await collection.insertOne(req.body);
        console.log(result)
        if(result){
            res.send({message: 'task added successfully', success: true,result: result});

        }else{
            res.send({message: 'task addition failed', success: false});        
        }
        

    

})

app.delete('/delete/:id', async (req, res) => {

    const db = await connectdb();
    const id = req.params.id
    console.log("db connected");
    const collection = await db.collection(collectionname);
    const result = await collection.deleteOne({ _id:new ObjectId(id) })
    if (result) {
        res.send({ message: 'task deleted', success: true, result: result });

    } else {
        res.send({ message: 'error tryafter', success: false });
    }
});

app.get('/update/:id', async (req, res) => {

    const db = await connectdb();
    const id = req.params.id
    console.log("db connected");
    const collection = await db.collection(collectionname);
    const result = await collection.findOne({ _id: new ObjectId(id) });

    if (result) {
        res.send({ message: 'task fetched', success: true, result: result });

    } else {
        res.send({ message: 'task  failed', success: false });
    }
});

app.listen(3500);