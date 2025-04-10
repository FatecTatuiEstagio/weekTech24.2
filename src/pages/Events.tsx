import { MoveLeft } from "lucide-react";
import { Link } from "react-router";

import logo20242 from '../imgs/eventos/20242/logo-20242.png'

interface TipEvent {
   name: string,
   link: string,
   logoEvent: string,
}

const events = [
   {
      name: "Semana de Tecnologia 2024-2",
      link: "/events/20242",
      logoEvent: logo20242
   },
]

function ListEvents({ name, link, logoEvent }: TipEvent) {
   return (
      <div className="bg-zinc-500/60 min-lg:h-20 h-16 px-5 justify-center max-w-max mx-5 rounded-2xl flex items-center indent-3">
         <img src={logoEvent} className="w-15 min-lg:w-20" alt="logo de 2024-2" />
         <a className="text-[16px] min-lg:text-2xl">
            <Link to={link}>
               {name}
            </Link>
         </a>
      </div>
   )
}
//min-[375px]:mt-10
export function Events() {
   return (
      <>
         <div className="flex justify-start min-[375px]:ml-5">
            <Link to={"/"}>
               <MoveLeft size={30} color="black" />
            </Link>
         </div>
         <p className="text-2xl min-lg:text-4xl flex justify-center">Envetos da Semana de Tecnologia</p>
         <div className="flex gap-16 mt-10 flex-col justify-center items-center w-screen">
            {events.map((obj, index) => (
               <ListEvents key={index} link={obj.link} logoEvent={obj.logoEvent} name={obj.name} />
            ))}
         </div>
      </>
   )
}