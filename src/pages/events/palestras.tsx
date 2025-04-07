import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 
import { weekSchedule } from "./weekData";
import { cn } from "@/lib/utils";
import { RodaConversa } from "./rodaConversa";

export default function WeeklyScheduleAccordion() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <Accordion type="single" collapsible className="w-full">
        {weekSchedule.map((daySchedule, index) => (
          <AccordionItem key={index} value={`day-${index}`}>
            <AccordionTrigger className="flex justify-between py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-lg mb-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">{daySchedule.day}</span>
                <span className="text-sm text-gray-500">{daySchedule.date}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 px-1">
              <div className="space-y-6">
                {daySchedule.speakers.map((speaker, speakerIndex) => (
                  <div 
                    key={speakerIndex} 
                    className={cn("flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm", !speaker.photo
                      && "flex items-start flex-wrap gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm")}
                  >
                    {speaker.photo ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                        <img
                          src={speaker.photo || ""}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <RodaConversa />
                    )}
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-lg font-semibold">{speaker.name}</h3>
                      <p className="text-gray-700 font-bold">{speaker.topic}</p>
                      <p className="text-gray-700 py-3 font-medium">{speaker.describe}</p>
                      <p className="text-gray-700 font-medium">Local: {speaker.local}</p>
                      <p className="text-gray-500 text-sm mt-1">{speaker.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}