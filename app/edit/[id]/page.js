import { connectDB } from '@/utils/database';
import { ObjectId } from 'mongodb';

export default async function Write({ params }) {
  // db에 접속
  const db = (await connectDB).db('forum');

  // post 콜렉션에 있는 글 다 가져오기
  const result = await db.collection('post').findOne({ _id: new ObjectId(params.id) });

  return (
    <div>
      <h4>수정 페이지</h4>
      <form action='/api/post/edit' method='POST'>
        <input name='title' placeholder='제목 입력' defaultValue={result.title} />
        <input name='content' placeholder='내용 입력' defaultValue={result.content}></input>
        <input style={{ display: 'none' }} name='_id' placeholder='내용 입력' value={result._id.toString()}></input>
        <button type='submit'>수정</button>
      </form>
    </div>
  );
}
