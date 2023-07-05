import { connectDB } from '@/utils/database';
import Link from 'next/link';

export default async function List() {
  // db에 접속
  const db = (await connectDB).db('forum');

  // post 콜렉션에 있는 글 다 가져오기
  let result = await db.collection('post').find().toArray();

  console.log(result);
  return (
    <div>
      {result.map(({ _id, title }) => (
        <li>
          <Link href={`/detail/${_id}`}>{title}</Link>
        </li>
      ))}
    </div>
  );
}
