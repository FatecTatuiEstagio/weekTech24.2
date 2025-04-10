
interface ModelHeading{
    text: string,
    title: string,
}

function TitleText({text, title}: ModelHeading) {
    return(
        <>
            <h1 className="min-sm:text-3xl min-md:text-4xl text-2xl font-inter">{title}</h1>
            <p className="text-start min-sm:text-sm min-md:text-lg">{text}</p>
        </>
    )
}

const arrayText = [
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
    },
]
//
export function Faq() {
    return (
        <> 
            <div className="flex flex-col max-sm:mx-8 min-sm:mx-20 min-md:mx-28 min-lg:mx-44 min-[1200mx]:mx-56 min-xl:mx-64 gap-5 items-center text-center justify-center mb-28">
                {arrayText.map((obj, index) => (
                    <TitleText key={index} title={obj.title} text={obj.text} />
                ))}
            </div>
        </>
    )
}