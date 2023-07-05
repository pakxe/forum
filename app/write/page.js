export default function Write() {
  return (
    <div>
      <h4>글 작성</h4>
      <form action='/api/post/new' method='POST'>
        <input name='title' placeholder='제목 입력' />
        <input name='content' placeholder='내용 입력'></input>
        <button type='submit'>작성</button>
      </form>
    </div>
  );
}
