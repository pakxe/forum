import { MongoClient } from 'mongodb';
import { connectDB } from '@/utils/database';

export default async function Home() {
  const db = (await connectDB).db('forum');

  // NOTE: DB 입출력 코드는 server component안에서만 ∵클라이언트에서 볼 수도 있으니까
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return <div>안녕</div>;
}
