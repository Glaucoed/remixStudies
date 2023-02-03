import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { marked } from "marked";


// o que está sendo desestruturado no params é o request lá contem diversas informações entre elas o (params, headers, body)
export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);
  // invariante é para garantir que os que os dados tem que vir para aplicação e se nao vir o dado é mostrado a mensagem
  const post = await getPost(params.slug);

  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  //  tomar cuidado ao utilizar o marked, tem desempenho porém pode ser executado script caso o usuario envie
  console.log(post)
  return json({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Some Post: {post.title}
      </h1>
      {/* <div>{post.markdown}</div> */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/ */}
    </main>
  );
}