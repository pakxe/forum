import { connectDB } from '@/utils/database';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { title, content } = request.body;

    if (title === '') return response.status(500).json('너 제목 왜 안씀');

    try {
      const db = (await connectDB).db('forum');
      let collection = await db.collection('post');

      const result = await collection.insertOne({
        title,
        content,
      });
    } catch (e) {
      console.log('에러나따');
    }

    return response.status(200).json({ message: '게시글이 성공적으로 저장되었습니다.', postId: result.insertedId });
  } else return response.status(500).json('실패');
}
