import { connectDB } from '@/utils/database';
import bcrypt from 'bcrypt';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const hash = await bcrypt.hash(request.body.password, 10);
    request.body.password = hash;

    const db = (await connectDB).db('forum');
    await db.collection('user_cred').insertOne(request.body);

    response.status(200).json('가입 성공');
  }
}
