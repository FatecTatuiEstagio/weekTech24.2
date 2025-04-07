import { MoveLeft } from "lucide-react";
import { Link } from "react-router";

import ImageCarousel from "@/components/carrousel";
import PartnersCarousel from "@/components/carrouselParceiros";
import { Slice } from "@/components/slice";
import logoTech from '../../imgs/eventos/20242/logo-20242.png';
import logoCps from '../../imgs/eventos/20242/logoCps.png';
import logoFatec from '../../imgs/eventos/20242/logoFatec.png';
import EventScheduleAccordion from "./palestras";

export function _20242() {
    return (
        <>
            <div></div>
            <div className="flex justify-start min-[375px]:mt-10 min-[375px]:ml-5">
                <Link to={"/events"}>
                    <MoveLeft size={30} color="black" />
                </Link>
            </div>
            <div className="grid grid-cols-2 ml-5">
                <img src={logoTech} className="min-[375px]:w-24 float-right" alt="logo da semana de tecnologia" />
                <img src={logoFatec} className="min-[375px]:w-24 float-right" alt="logo da fatec tatuí" />
                <img src={logoCps} className="min-[375px]:w-[500px] float-right" alt="logo do CPS" />
            </div>
            <ImageCarousel />
            <div className="flex items-center flex-col gap-5">
                <p className="text-2xl">O que é a Semana da Tecnologia?</p>
                <p className="mx-8">A Semana da Tecnologia da Fatec Tatuí é um evento que ocorre anualmente, oferecendo uma variedade de atividades 
                    como palestras, exposições de pesquisas acadêmicas, minicursos, e workshops. O objetivo principal é promover o 
                    conhecimento científico e tecnológico, além de criar oportunidades de networking entre alunos, empresas e a comunidade 
                    acadêmica. Este ano,
                    <strong>o evento ocorreu entre os dias 4 e 9 de novembro.</strong>
                </p>
            </div>
            
            <Slice/>
            <div className="flex justify-center flex-col items-center">
                <p className="text-4xl font-cardo italic">Parceiros</p>
                <PartnersCarousel />
            </div>
            <Slice/>
            <div className="flex justify-center flex-col items-center">
                <p className="text-4xl font-cardo italic">Palestrantes</p>
            </div>
            <EventScheduleAccordion />
        </>
    )
}