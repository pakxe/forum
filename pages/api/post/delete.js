import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method === 'DELETE') {
    const { _id } = JSON.parse(request.body);
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').deleteOne({ _id: new ObjectId(_id) });

    response.status(200).json('삭제 완료');
  }
}
