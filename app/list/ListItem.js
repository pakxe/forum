// 사라지는 효과를 주려면 js코드가 필요하므로 client component로 바꿈
'use client';

import Link from 'next/link';

export default function ListItem(props) {
  // useEffect(() => {
  //   // NOTE: useEffect는 클라이언트 코드에 작성이 되고, 여기서는 디비에 직접 조작 불가(보안) 따라서 서버에 부탁해야함
  //   // NOTE: 다만 이 경우 SEO.. 단점이 있음. useEffect는 html렌더링이 다 끝나고 실행되기 때문ㅇ
  // }, [])

  return (
    <>
      {props.result.map(({ _id, title }) => (
        <li
          className='list-item'
          style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'pink', margin: '10px', width: '100px' }}
        >
          <Link href={`/detail/${_id}`}>{title}</Link>
          <br />
          <Link href={`/edit/${_id}`}>edit</Link>
          <div
            onClick={(e) => {
              fetch('/api/test?name=kim&age=20');
            }}
          >
            🗑️
          </div>
        </li>
      ))}
    </>
  );
}

// fetch('/api/post/delete', { method: 'DELETE', body: JSON.stringify({ _id }) }).then(() => {
//   // NOTE: query string으로 데이터 보내기

//   fetch('/api/test?name=kim&age=20');

//   console.log(123);
//   e.target.parentElement.style.opacity = 0;
//   setTimeout(() => {
//     e.target.parentElement.style.display = 'none';
//   }, 1000);
// });

/**
 * NOTE: 리스트 페이지와 리스트 아이템에서 어떻게 client component를 분리하냐 에 대해서 고민해보자
 * 복잡한 컴포넌트 계층이라면 리스트 아이템에서 스스로 자신이 사용할 result 데이터를 불러오는게 좋다.
 * 하지만 이렇게되면 이 리스트아이템은 client가 되아야 한다. (이거 이유를 모르겠음 그냥 db직접 접근하면 되는거 아닌가 페이지에서 했던 것처럼)
 * 지금 사용한 방법은 페이지에서 db접속해 얻은 데이터를 props로 리스트 아이템에 줌.
 */
