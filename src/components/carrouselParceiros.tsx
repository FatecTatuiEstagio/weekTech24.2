import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Igr from "../imgs/eventos/20242/parceiros/igr_logo.png"
import One7 from "../imgs/eventos/20242/parceiros/one_7.png"
import Uotz from "../imgs/eventos/20242/parceiros/uotz.png"
import Wilson from "../imgs/eventos/20242/parceiros/wilson.png"

const partners = [
  Igr, One7, Uotz, Wilson
];

export default function PartnersCarousel() {
  // Configuração para autoplay
  const [_emblaRef, _emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <div className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-4">                
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-2 h-24 flex items-center justify-center bg-white rounded-md shadow-sm border border-gray-100">
                  {/* {console.log(partner.logo)} */}
                  <img
                    src={partner}
                    className="max-h-16 max-w-[80%] object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 sm:left-0 w-8 h-8" />
          <CarouselNext className="-right-3 sm:right-0 w-8 h-8" />
        </Carousel>
      </div>
    </div>
  );
}