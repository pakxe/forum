import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';
import Comment from './Comment';

export default async function Detail({ params }) {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(params.id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <div>{result.content}</div>
      <Comment parent={params.id} />
    </div>
  );
}
