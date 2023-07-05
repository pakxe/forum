'use client';

import { useRouter } from 'next/router';

export default function DetailLink() {
  // NOTE: useRouter는 client component에서만 사용 가능
  const router = useRouter();

  // NOTE: 현재 URL출력 = usePathName()
  const usePathName = usePathName();

  return <button onClick={() => router.back('/detail/dafdasfda')}>버튼</button>;
}
