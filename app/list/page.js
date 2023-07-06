import { connectDB } from '@/utils/database';
import Link from 'next/link';
import ListItem from './ListItem';

// NOTE: 렌더링 전략 설정. force=static이면 ssg, dynamic이면 ssr
export const dynamic = 'force-dynamic';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div>
      <ListItem result={result} />
    </div>
  );
}
