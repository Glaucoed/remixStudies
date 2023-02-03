import {  Outlet } from "@remix-run/react";



export default function User() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
       User test
      </h1>
      <div className="grid grid-cols-4 gap-6">
      <h1> TESTE </h1>
        <main className="col-span-4 md:col-span-3">
          {
          /* O Outlet deve ser utilizado na rota pai, para que seja renderizado uma rota filho que no caso
          o filho vai ser o diretorio users

          Sendo assim o 
          posts/users.tsx é o Pai, então utilizo o Outlet nele para que renderize o diretorio
          posts/users/index.tsx
          */
          }
         <Outlet />
        </main>
      </div>
    </div>
  );
}