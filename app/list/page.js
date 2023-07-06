import { connectDB } from '@/utils/database';
import Link from 'next/link';
import ListItem from './ListItem';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div>
      <ListItem result={result} />
    </div>
  );
}
