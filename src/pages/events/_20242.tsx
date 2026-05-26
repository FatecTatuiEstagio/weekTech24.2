import ImageCarousel from "@/components/carrousel"
import PartnersCarousel from "@/components/carrouselParceiros"
import { Slice } from "@/components/slice"
import { Faq } from "./Faq"
import EventScheduleAccordion from "./palestras"
import{ Footer } from "../footer.tsx"
import { ContactSection } from "../contato.tsx"
import { Header } from "../header.tsx"

export function _20242() {
  return (
    <div className="w-full bg-white text-black">

       <Header/> 


      {/* ABOUT */}
      <div className="flex flex-col items-center text-center px-6 py-16 mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b20000]">
          Semana da Tecnologia
        </h1>

        <p className="max-w-3xl mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
        A Semana da Tecnologia da Fatec Tatuí é um evento que ocorre anualmente, oferecendo uma variedade de atividades como palestras, exposições de pesquisas acadêmicas, minicursos, e workshops. O objetivo principal é promover o conhecimento científico e tecnológico, além de criar oportunidades de networking entre alunos, empresas e a comunidade acadêmica.
          <br /><br />
          <span className="font-semibold text-black">
            O evento ocorreu entre os dias 4 e 9 de novembro.
          </span>
        </p>
      </div>

            {/* HERO CAROUSEL */}
            <div className="flex justify-center pb-10">
                <ImageCarousel />
            </div>

      <Slice />

      {/* PARCEIROS */}
    <div className="py-16">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-start text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b20000] mb-10">
        Parceiros
        </h2>
        <PartnersCarousel />
    </div>
    </div>

      <Slice />

      {/* PALESTRANTES */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-start text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b20000] mb-10">
          Palestrantes
        </h2>
        <EventScheduleAccordion />
      </div>

      <Slice />

      {/* FAQ */}
      <div className="py-16">
        <Faq />
      </div>

      <Slice />

      <ContactSection/>
      <Footer/>
    </div>
  )
}