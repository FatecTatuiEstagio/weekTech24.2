import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

import slide1 from "../imgs/eventos/20242/carrousel/slide1.jpeg"
import slide2 from "../imgs/eventos/20242/carrousel/slide2.jpeg"
import slide3 from "../imgs/eventos/20242/carrousel/slide3.jpeg"
import slide4 from "../imgs/eventos/20242/carrousel/slide4.jpeg"

const images = [slide1, slide2, slide3, slide4]

export default function ImageCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">

      <Carousel className="w-full">

        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">

                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full aspect-video object-cover"
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 text-[#b20000]" />
        <CarouselNext className="right-2 text-[#b20000]" />

      </Carousel>

    </div>
  )
}