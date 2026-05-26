import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import Igr from "../imgs/eventos/20242/parceiros/igr_logo.png"
import One7 from "../imgs/eventos/20242/parceiros/one_7.png"
import Uotz from "../imgs/eventos/20242/parceiros/uotz.png"
import Wilson from "../imgs/eventos/20242/parceiros/wilson.png"

const partners = [Igr, One7, Uotz, Wilson]

export default function PartnersCarousel() {
  return (
    <div className="w-full py-10">

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full max-w-5xl mx-auto"
      >

        <CarouselContent className="-ml-2 md:-ml-4">

          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >

              <div className="h-28 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">

                <img
                  src={partner}
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