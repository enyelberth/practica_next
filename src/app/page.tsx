import Image from "next/image";
import React from "react";
import { Avatar } from "@nextui-org/react";
import { Input } from "@nextui-org/input";


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      


      <form className="bg-gray-500 px-8 ">
        <h2 className="text-center font-bold text-cl p-2 m-2">Registrate</h2>
        <div className="pb-10 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="number" className="h-1" label="Id" placeholder="Ingresa tu ID" />
        </div>

        <div className="pb-2 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="email" label="Email" placeholder="Enter your email" />
        </div>

        <div className="pb-2 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="text" label="Usuario" placeholder="Ingresa tu Usuario" />
        </div>

        <div className="pb-2 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="password"
            label="Password"
            placeholder="Ingresa tu contrasena"
            className="max-w-xs"
          />
        </div>
          <div className="flex justify-center">

        <button className="bg-red-500 hover:bg-red-700 p-2 m-2 rounded-xl shadow-2xl border-2 border-gray-800/50 ">Registrate</button>
          </div>
      
      </form>
    </main>
  );
}
