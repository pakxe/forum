import { connectDB } from '@/utils/database';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { id, password } = request.body;

    const db = (await connectDB).db('forum');

    if (title === '') return response.status(500).json('너 아이디 왜 안씀');
    if (password === '') return response.status(500).json('너 비번 왜 안씀');
    if (await db.collection('post').findOne({ id })) return response.status(500).json('너 아이디 왜 안씀');

    try {
      let collection = await db.collection('post');

      const result = await collection.insertOne({
        title,
        content,
      });
      return response.status(200).json({ message: '게시글이 성공적으로 저장되었습니다.', postId: result.insertedId });
    } catch (e) {
      console.log('에러나따');
    }
  } else return response.status(500).json('실패');
}
