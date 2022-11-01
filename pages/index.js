import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h2>Mock data</h2>
      <ul>
        <li>
          <Link href="/api/comments">GET /api/comments</Link>
        </li>
        <li>
          <Link href="/api/companies">GET /api/companies</Link>
        </li>
        <li>
          <Link href="/api/posts">GET /api/posts</Link>
        </li>
        <li>
          <Link href="/api/users">GET /api/users</Link>
        </li>
      </ul>
      <h2>Todo api</h2>
      <ul>
        <li>
          <Link href="/api/todo/list">GET /api/todo/list</Link>
        </li>
        <li>
          <p>POST /api/todo/add</p>
          <p>Parameters (body params): name(string)</p>
        </li>
        <li>
          <p>POST /api/todo/update</p>
          <p>Parameters (body params): id(uuid), isDone(bool)</p>
        </li>
        <li>
          <p>DELETE /api/todo/delete</p>
          <p>Parameters (query params): id(uuid)</p>
        </li>
      </ul>
    </div>
  );
}
