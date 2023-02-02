import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


// o que está sendo desestruturado no params é o request lá contem diversas informações entre elas o (params, headers, body)
export const loader = async ({ params }: LoaderArgs) => {

  return json({ slug: params.slug });
};

export default function PostSlug() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Some Post: {slug}
      </h1>
    </main>
  );
}