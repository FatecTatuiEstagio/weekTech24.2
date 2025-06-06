
import ImageCarousel from "@/components/carrousel";
import PartnersCarousel from "@/components/carrouselParceiros";
import { Slice } from "@/components/slice";
import logoTech from '../../imgs/eventos/20242/logo-20242.png';
import logoCps from '../../imgs/eventos/20242/logoCps.png';
import logoFatec from '../../imgs/eventos/20242/logoFatec.png';
import { Faq } from "./Faq";
import EventScheduleAccordion from "./palestras";

export function _20242() {
    return (
        <>
            <div className="flex md:gap-20 sm:gap-5 gap-2.5 justify-center">
                <img src={logoTech} className="max-sm:w-16 sm:w-[100px] md:w-[126px] float-right" alt="logo da semana de tecnologia" />
                <img src={logoFatec} className="max-sm:w-16 sm:w-[100px] md:w-[126px] float-right" alt="logo da fatec tatuí" />
                <img src={logoCps} className="max-sm:w-[205px] sm:w-[300px] md:w-[430px] float-right" alt="logo do CPS" />
            </div>
            <ImageCarousel />
            <div className="flex items-center flex-col gap-5">
                <p className="sm:text-4xl text-2xl">O que é a Semana da Tecnologia?</p>
                <p className="sm:mx-40 xl:mx-96 mx-8">A Semana da Tecnologia da Fatec Tatuí é um evento que ocorre anualmente, oferecendo uma variedade de atividades 
                    como palestras, exposições de pesquisas acadêmicas, minicursos, e workshops. O objetivo principal é promover o 
                    conhecimento científico e tecnológico, além de criar oportunidades de networking entre alunos, empresas e a comunidade 
                    acadêmica. Este ano,
                    <strong>o evento ocorreu entre os dias 4 e 9 de novembro.</strong>
                </p>
            </div>
            
            <Slice/>
            <div className="flex justify-center flex-col items-center">
                <p className="min-sm:text-4xl min-md:text-5xl text-3xl font-cardo italic">Parceiros</p>
                <PartnersCarousel />
            </div>
            <Slice/>
            <div className="flex justify-center flex-col items-center">
                <p className="min-sm:text-4xl min-md:text-5xl text-3xl font-cardo italic">Palestrantes</p>
            </div>
            <EventScheduleAccordion />
            <Slice/>
            <Faq />
            <Slice/>
        </>
    )
}