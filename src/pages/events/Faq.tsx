const faqData = [
    {
      title: "O que acontece na Semana da Tecnologia?",
      text: "Durante a Semana de Tecnologia, você pode esperar participar de palestras com especialistas, exposições de projetos desenvolvidos pelos alunos, oficinas práticas e atividades interativas que buscam envolver os participantes com as inovações tecnológicas mais recentes. Este evento também promove discussões sobre sustentabilidade, inovação e responsabilidade social."
    },
    {
      title: "Por que participar do evento?",
      text: "A Semana da Tecnologia é uma ótima oportunidade para expandir sua rede de contatos, conhecer as últimas tendências em tecnologia e inovação, e interagir com profissionais da área. Além disso, é uma chance de ver em primeira mão os projetos criados pelos estudantes, o que pode ser inspirador tanto para quem já está no campo da tecnologia quanto para quem está considerando uma carreira na área."
    },
    {
      title: "Quanto custa a entrada?",
      text: "Qualquer pessoa interessada em ciência, tecnologia, inovação e educação pode participar. O evento é aberto ao público externo, o que significa que você não precisa ser estudante da Fatec para participar."
    },
    {
      title: "Quem pode participar?",
      text: "Qualquer pessoa interessada em ciência, tecnologia, inovação e educação pode participar. O evento é aberto ao público externo, o que significa que você não precisa ser estudante da Fatec para participar."
    },
    {
      title: "Onde vai acontecer o evento?",
      text: "O evento será realizado na Fatec Tatuí, localizada na Rodovia Mario Batista Mori, 971 - Jardim Aeroporto, Tatuí - SP"
    }
  ]
  
  export function Faq() {
    return (
      <section className="max-w-4xl mx-auto px-6 py-10">
  
        <div className="flex flex-col gap-10">
  
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border-b border-gray-200 pb-6"
            >
  
              <h3 className="text-lg md:text-xl font-semibold text-black flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#b20000]" />
                {item.title}
              </h3>
  
              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    )
  }