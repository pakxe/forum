'use client';
// NOTE: Link태그를 쓰면 변경되는 부분만 바뀐다. 새로고침되는게 아님
import { useEffect, useState } from 'react';

// NOTE: 댓글목록이 새로고침 안되고 바로 뜨게. 즉 클라이언트 쪽에서 새로운 댓글의 html 을 만들어서 보여주는 것이므로 client compoent
// NOTE: form태그는 새로고침이 되기 때문에 ajax를 이용하자 -> client
export default function Comment(props) {
  let [comment, setComment] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?parent=${props.parent}`)
      .then((r) => r.json())
      .then((result) => setList(result));
  }, []);

  // TODO: 댓글 저장 완료시 then으로 서버에서 댓글 목록 다시 요청헤서 state에 저장해 새로고침 없이도 새 댓글 바로 보이게 하기
  return (
    <div>
      <div>댓글 목록</div>
      {list.map(({ author, comment }) => (
        <div>
          {author}: {comment}
        </div>
      ))}
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={() => {
          fetch('/api/comment/new', { method: 'POST', body: JSON.stringify({ comment, parent: props.parent }) });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
