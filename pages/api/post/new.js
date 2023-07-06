import { connectDB } from '@/utils/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request, response) {
  // NOTE: 서버 기능 안에서 쓸 때는 request, response도 전달해줘야함
  const session = await getServerSession(request, response, authOptions);

  // 로그인을 안한 상태는 막아야함
  if (session) {
    request.body.author = session.user.email;
  }

  if (request.method === 'POST') {
    const { title, content } = request.body;

    if (title === '') return response.status(500).json('너 제목 왜 안씀');

    try {
      const db = (await connectDB).db('forum');
      let collection = await db.collection('post');

      const result = await collection.insertOne(request.body);
      response.redirect(302, '/list');
    } catch (e) {
      ('에러나따');
    }
  } else return response.status(500).json('실패');
}
