import { MongoClient } from 'mongodb';

async function handle(req: any, res: any) {
  
  if (req.method === 'GET') {
    // const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://quangvd7:aq06121997@cluster0.cudps.mongodb.net/test1?retryWrites=true&w=majority`
    )

    const db = client.db();
    
    
    const newsCollection = db.collection('news');
    
    const result = await newsCollection.find().toArray();

    client.close();

    return  res.status(200).json({data: result, mess: 'success!'})
  }
}

export default handle;