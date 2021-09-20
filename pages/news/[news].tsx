import { useRouter } from "next/router";
import Link from 'next/link';
import  { MongoClient } from 'mongodb';
var ObjectId = require('mongodb').ObjectId;


const New = (props: any) => {
  const { id, newInfo } = props;
  const router = useRouter();

  return (
    <div>
      <h3>
        New Page 
      </h3>
      <h4>{ newInfo && newInfo.name}</h4>
      <h4>{newInfo && newInfo.description}</h4>
      <Link href="/">back news home</Link>
    </div>
  )

}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://quangvd7:aq06121997@cluster0.cudps.mongodb.net/test1?retryWrites=true&w=majority`
  )

  const db = client.db();
  
  
  const newsCollection = db.collection('news');
  
  const result = await newsCollection.find().toArray();
  const data = JSON.parse(JSON.stringify(result))

  return {
    fallback: true,
    paths: data.map((item: any) => ({ params: { 'news': item._id } }))
  }
}

export async function getStaticProps(context: any) {
  const newId = context.params.news;

  const uri = "mongodb+srv://quangvd7:aq06121997@cluster0.cudps.mongodb.net/test1?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);

  const db = client.db();
  const newConnection = db.collection('news');
  console.log('infor == 1', ObjectId(newId))

  const newInfo = await newConnection.findOne({_id: ObjectId(newId)});
  console.log('infor == ', JSON.parse(JSON.stringify(newInfo)), newId)
  client.close()


  return {
    props: {
      id: context.params.news == 1 ? null : context.params.news,
      newInfo: JSON.parse(JSON.stringify(newInfo))
    }
  }
}

export default New;