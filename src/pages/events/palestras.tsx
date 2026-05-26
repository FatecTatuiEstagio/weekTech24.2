import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { weekSchedule } from "./weekData"
import { cn } from "@/lib/utils"
import { RodaConversa } from "./rodaConversa"



export default function WeeklyScheduleAccordion() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">

      <Accordion type="single" collapsible className="w-full space-y-4">

        {weekSchedule.map((daySchedule, index) => (
          <AccordionItem
            key={index}
            value={`day-${index}`}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >

            {/* HEADER DO DIA */}
            <AccordionTrigger className="flex justify-between px-6 py-5 bg-white hover:bg-gray-50">

              <div className="flex flex-col items-start">
                <span className="text-lg md:text-xl font-bold text-[#b20000]">
                  {daySchedule.day}
                </span>
                <span className="text-sm text-gray-500">
                  {daySchedule.date}
                </span>
              </div>

            </AccordionTrigger>

            {/* CONTEÚDO */}
            <AccordionContent className="px-4 pb-6 pt-4 bg-white">

              <div className="space-y-5">

                {daySchedule.speakers.map((speaker, speakerIndex) => (

                  <div
                    key={speakerIndex}
                    className={cn(
                      "flex gap-5 p-5 rounded-xl border border-gray-100 bg-white shadow-sm",
                      !speaker.photo && "flex-col items-center text-center"
                    )}
                  >

                    {/* FOTO OU RODA DE CONVERSA */}
                    {speaker.photo ? (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#b20000]/20">
                        <img
                          src={speaker.photo || ""}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full">
                        <RodaConversa />
                      </div>
                    )}

                    {/* INFO */}
                    <div className="flex flex-col flex-1">

                      <h3 className="text-lg font-semibold text-black">
                        {speaker.name}
                      </h3>

                      <p className="text-[#b20000] font-semibold mt-1">
                        {speaker.topic}
                      </p>

                      <p className="text-gray-600 text-sm md:text-base mt-2">
                        {speaker.describe}
                      </p>

                      <div className="flex flex-col md:flex-row md:justify-between mt-3 text-sm text-gray-500 gap-1">
                        <span>{speaker.local}</span>
                        <span>{speaker.time}</span>
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </AccordionContent>

          </AccordionItem>
        ))}

      </Accordion>

    </div>
  )
}