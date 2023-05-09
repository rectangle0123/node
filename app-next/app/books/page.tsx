// 型宣言
type Book = {
  id: number,
  name: String,
  author: String
}
 
 // コンポーネント
 export default async function Books() {
  // データ取得
  const response = await fetch('http://localhost:3000/api/books');
  const books: Book[] = await response.json();
  // 描画
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous">
      </link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>書名</th>
            <th>著者</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <th>{book.id}</th>
              <td>{book.name}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
