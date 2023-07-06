import { MongoClient } from 'mongodb';
import { connectDB } from '@/utils/database';

// NOTE: 누가 페이지 방문시 60초동안 페이지 캐싱됨. 이건 페이지 단위 캐싱! 서버 자원 아끼는 방법

export const revalidate = 60;
export default async function Home() {
  // NOTE: DB 입출력 코드는 server component안에서만 ∵클라이언트에서 볼 수도 있으니까

  return <div>안녕</div>;
}
