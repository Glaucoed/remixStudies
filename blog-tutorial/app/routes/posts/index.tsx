import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  //O useLoaderData é uma hook do React que permite que você compartilhe dados entre componentes de uma maneira fácil e eficiente, sem precisar passar dados manualmente via props
  // console.log(posts);
  return (
    <main>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <h1/>
      <Link to="users" className="text-red-600 underline">
        User
      </Link>
      {
      /* Crio um rota para o admin e crio o arquivo admin.tsx o mesmo nome 
      que utilizo no to=admin é o mesmo nome que precisa ser utilizado ao ser criado o arquivo*/
      }
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}