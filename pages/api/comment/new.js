import { connectDB } from '@/utils/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  // NOTE: 서버 기능 안에서 쓸 때는 request, response도 전달해줘야함
  const session = await getServerSession(request, response, authOptions);

  if (request.method === 'POST') {
    const { comment, parent } = JSON.parse(request.body);

    // 빈칸이면 빠꾸
    if (request.body.comment === '') return response.status(500).json('너 제목 왜 안씀');

    const data = { comment, parent: new ObjectId(parent), author: session.user.email };

    const db = (await connectDB).db('forum');
    const result = await db.collection('comment').insertOne(data);

    return response.status(200).json('저장 완료');
  } else return response.status(500).json('실패');
}
