import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

import pfo1 from "@/imgs/eventos/20242/palestrantes/roda/pfo1.png"
import pfo2 from "@/imgs/eventos/20242/palestrantes/roda/pfo2.png"
import pfo3 from "@/imgs/eventos/20242/palestrantes/roda/pfo3.png"
import pfo4 from "@/imgs/eventos/20242/palestrantes/roda/pfo4.png"
import pfo5 from "@/imgs/eventos/20242/palestrantes/roda/pfo5.png"

const speakers = [pfo1, pfo2, pfo3, pfo4, pfo5]

export function RodaConversa() {
  return (
    <div className="w-full py-4">

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >

        <CarouselContent className="-ml-2 md:-ml-4">

          {speakers.map((sp, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3"
            >

              <div className="h-24 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">

                <img
                  src={sp}
                  className="max-h-14 max-w-[80%] object-contain"
                />

              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

        <CarouselPrevious className="text-[#b20000]" />
        <CarouselNext className="text-[#b20000]" />

      </Carousel>

    </div>
  )
}