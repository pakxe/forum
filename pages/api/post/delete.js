import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
  if (요청.method === 'DELETE') {
    console.log(123);
    console.log(JSON.parse(요청.body));
    let session = await getServerSession(요청, 응답, authOptions);

    const db = (await connectDB).db('forum');
    let 찾은거 = await db.collection('post').findOne({ _id: new ObjectId(JSON.parse(요청.body)._id) });

    if (찾은거.author === session.user.email) {
      let result = await db.collection('post').deleteOne({ _id: new ObjectId(JSON.parse(요청.body)._id) });
      return 응답.status(200).json('삭제완료');
    } else {
      return 응답.status(500).json('현재유저와 작성자 불일치');
    }
  }
}
