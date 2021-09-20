import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import News from './news';
import { MongoClient } from 'mongodb';

const DAYS: any[] = ['1', '2', '3', '4'];


const Home: NextPage = (props: any) => {
  const { listDay, data } = props;
  const [newData, setNewData]: any = useState(null);

  useEffect(() => {
    console.log('xxx  1== ', data)

  }, [listDay, data])

  return (
    <div>
      home page
      <button type="button" onClick={() => setNewData(['x', 'y', 'z', 'w'])}>action</button>

      <News data={data}/>
    </div>
  )
}

// export async function getServerSideProps(context: any) {
//   console.log('req === ', context.req.params);
//   // console.log('res === ', context.res);
  

//   let newx: any = ['x', 'y', 'z', 'w'];
//   // const setData = () => {
//   //   return new Promise((resolve) => {
//   //     setTimeout(() => {
//   //       resolve(['x', 'y', 'z', 'w'])
//   //     }, 5000)
//   //   })

//   // }

//   // newx = await setData()
//   // console.log('yyy 22 == > ', newx)

//   return {
//     props: {
//       listDay: newx
//     }
//   }
// }

export async function getStaticProps() {
  let newx: any = DAYS;
  const client = await MongoClient.connect(
    `mongodb+srv://quangvd7:aq06121997@cluster0.cudps.mongodb.net/test1?retryWrites=true&w=majority`
  )

  const db = client.db();
  
  
  const newsCollection = db.collection('news');
  
  const result = await newsCollection.find().toArray();
  const data = JSON.parse(JSON.stringify(result))

  return {
    props: {
      listDay: newx,
      data
    },
    revalidate: 1
  }
}

export default Home
