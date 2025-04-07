import { MoveLeft } from "lucide-react";
import { Link } from "react-router";

import logo20242 from '../imgs/eventos/20242/logo-20242.png'

export function Events() {
   return (
      <>
         <div className="flex justify-start min-[375px]:mt-10 min-[375px]:ml-5">
            <Link to={"/"}>
               <MoveLeft size={30} color="black" />
            </Link>
         </div>
         <p className="text-2xl flex justify-center">Envetos da Semana de Tecnologia</p>
         <div className="flex justify-center h-screen">
            <div className="mt-10 w-screen bg-zinc-500/60 h-16 mx-5 rounded-2xl flex items-center indent-3">
               <img src={logo20242} className="w-15" alt="logo de 2024-2" />
               <a className="text-lg">
                  <Link to={"/events/20242"}>
                     Semana de Tecnologia 2024-2
                  </Link>
               </a>
            </div>
         </div>
      </>
   )
}