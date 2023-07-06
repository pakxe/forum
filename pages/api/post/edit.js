import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { title, content, _id } = request.body;

    let 바꿀거 = {
      title,
      content,
    };
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').updateOne({ _id: new ObjectId(_id) }, { $set: 바꿀거 });

    response.redirect(302, '/list');
  }
}
